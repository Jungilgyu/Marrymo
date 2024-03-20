package site.bank.restapi.auth.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import site.bank.restapi.auth.dto.common.ClientDto;
import site.bank.restapi.auth.exception.AuthErrorCode;
import site.bank.restapi.auth.exception.AuthException;

@Repository
@PropertySource("classpath:application.yml")
@AllArgsConstructor
public class AuthMapper {

	private Environment env;

	public ClientDto findByClientId(String clientId) {
		if (clientId.equals(env.getProperty("institution.client_id")))
			return ClientDto.builder()
				.clientId(env.getProperty("institution.client_id"))
				.clientSecret(env.getProperty("institution.client_secret"))
				.clientRole(env.getProperty("institution.client_role"))
				.build();
		throw new AuthException(AuthErrorCode.INSTITUTION_NOT_FOUND);
	}

}
