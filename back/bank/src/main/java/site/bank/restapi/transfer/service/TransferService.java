package site.bank.restapi.transfer.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import site.bank.restapi.transfer.dto.request.AccountCheckRequest;
import site.bank.restapi.transfer.dto.request.AccountRequest;
import site.bank.restapi.transfer.dto.request.BalanceUpdateRequest;
import site.bank.restapi.transfer.dto.request.TransferMoneyRequest;
import site.bank.restapi.transfer.dto.response.AccountResponse;
import site.bank.restapi.transfer.dto.response.BankCodeReseponse;
import site.bank.restapi.transfer.dto.response.TransferMoneyResponse;
import site.bank.restapi.transfer.exception.TransferErrorCode;
import site.bank.restapi.transfer.exception.TransferException;
import site.bank.restapi.transfer.mapper.TransferMapper;

import java.util.List;
@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TransferService {
    @Autowired
    private final TransferMapper transferMapper;

    private final PlatformTransactionManager transactionManager;

    public List<BankCodeReseponse> findAllBankList(){
        return transferMapper.findAllBankList();
    }

    public long insertAccount(AccountRequest accountRequest){
        try{
            transferMapper.insertAccount(accountRequest);
            return accountRequest.getAccountSequence();
        }catch(Exception e){
            throw new TransferException(TransferErrorCode.TRANSFER_REGISTER_ACCOUNT_FAILED);
        }
    }

    public AccountResponse findAccountByAccountNum(String accountNum){
        long accountSeq=transferMapper.findAccountByAccountNum(accountNum);
        return transferMapper.findAccountByAccountSeq(accountSeq);
    }

    public AccountResponse findAccountByAccountSeq(Long accountSeq){
        try{
            return transferMapper.findAccountByAccountSeq(accountSeq);
        }catch (Exception e){
            throw new TransferException(TransferErrorCode.TRANSFER_ACCOUNT_NOT_FOUND);
        }
    }

    @Transactional(isolation= Isolation.REPEATABLE_READ)
    public TransferMoneyResponse insertTransferHistory(TransferMoneyRequest transferMoneyRequest){

        // 존재하는 계좌인지 확인한다.
        int senderAccountCnt=transferMapper.countAccountNum(transferMoneyRequest.getSenderAccountNum());
        if (senderAccountCnt==0){
            throw new TransferException(TransferErrorCode.TRANSFER_ACCOUNT_NOT_FOUND);
        }
        int receiverAccountCnt=transferMapper.countAccountNum(transferMoneyRequest.getReceiverAccountNum());
        if (receiverAccountCnt==0){
            throw new TransferException(TransferErrorCode.TRANSFER_ACCOUNT_NOT_FOUND);
        }

        // 송금인 계좌 고유 번호를 찾는다.
        long accountSequence= transferMapper.findAccountByAccountNum(transferMoneyRequest.getSenderAccountNum());
        transferMoneyRequest.setAccountSequence(accountSequence);

        // 계좌 잔액이 충분한지 확인한다.
        AccountResponse accountResponse=transferMapper.findAccountByAccountSeq(accountSequence);
        if (accountResponse.getBalance()-transferMoneyRequest.getTranAmt()<0){
            throw new TransferException(TransferErrorCode.TRANSFER_BALANCE_NOT_ENOUGH);
        }

        try{
            // 돈을 송금한다.
            BalanceUpdateRequest senderRequest=new BalanceUpdateRequest(transferMoneyRequest.getSenderAccountNum(),transferMoneyRequest.getTranAmt()*(-1));
            BalanceUpdateRequest receiverRequest=new BalanceUpdateRequest(transferMoneyRequest.getReceiverAccountNum(), transferMoneyRequest.getTranAmt());
            transferMapper.updateBalancee(senderRequest);
            transferMapper.updateBalancee(receiverRequest);
        }catch(Exception e){
            throw new TransferException(TransferErrorCode.TRANSFER_SEND_FAILED);
        }

        try{
            // 거래 내역을 저장한다.
            transferMapper.insertTransferHistory(transferMoneyRequest);
        }catch(Exception e){
            throw new TransferException(TransferErrorCode.TRANSFER_RESISTER_HISTORY_FAILED);
        }

        // 거래 내역을 반환한다.
        return transferMapper.findTransferHistoryByTranSequence(transferMoneyRequest.getTranSequence());
    }

    public int findByBankCodeAndAccountNum(AccountCheckRequest accountCheckRequest){
        return transferMapper.findByBankCodeAndAccountNum(accountCheckRequest);
    }
}
