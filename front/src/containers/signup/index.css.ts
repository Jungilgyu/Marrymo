import {style} from '@vanilla-extract/css';
import {contentWrapper} from '@/styles/wrapper.css';
import {flex} from '@/styles/common.css';
import {vars} from '@/styles/vars.css';

export const signupWrapper = style([
  contentWrapper({contentArea: 'header'}),
  flex({
    align: 'center',
    justify: 'flexStart',
    direction: 'column',
  }),
  {
    '@media': {
      'screen and (min-width: 416px)': {
        width: '100%',
      },
    },
    width: '100%',
    margin: '0',
    padding: '112px 32px 32px',
    boxSizing: 'border-box',
  },
]);

export const textareaContainer = style({
  maxWidth: '416px',
  width: '100%',
  position: 'relative',
  // padding: `0 ${vars.space['2x']}`,
  boxSizing: 'border-box',
  marginBottom: vars.space['2x'],
});

export const textarea = style({
  width: '92%',
  lineHeight: 1.5,
  height: `calc(${vars.fontSize['2x']} * 1.5 * 10)`,
  padding: vars.space['2x'],
  borderColor: vars.colors.lightGray,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: vars.borderRadius['1x'],
  fontSize: vars.fontSize['2x'],
  fontFamily: 'BMJua',
  resize: 'none',
  cursor: 'pointer',
  '::placeholder': {
    color: vars.colors.lightGray,
  },
});

export const charCounter = style({
  position: 'absolute',
  bottom: vars.space['1x'],
  right: vars.space['1x'],
  fontSize: vars.fontSize['1.5x'],
  color: vars.colors.gray,
});

export const alertMessage = style({
  marginTop: vars.space['0.5x'],
  color: vars.colors.alertRed,
  fontSize: vars.fontSize['1.5x'],
  fontWeight: vars.fontWeight.accent,
});

export const weddingDatePickerContainer = style([
  flex({
    align: 'flexStart',
    justify: 'flexStart',
    direction: 'row',
  }),
  {
    marginBottom: vars.space['2x'],
    fontSize: vars.fontSize['2x'],
  },
]);

export const asteriskStyle = style({
  marginLeft: vars.space['0.5x'],
  fontSize: vars.fontSize['2x'],
  color: vars.colors.alertRed,
  fontWeight: vars.fontWeight.accent,
});

export const selectedDate = style({
  fontSize: vars.fontSize['2x'],
  textAlign: 'center',
});

export const datePicker = style({
  // Styles for the input field of the date picker
  borderRadius: '9999px', // Full pill shape
  borderColor: vars.colors.roseGold,
  // Add other styles such as padding, fontSize, etc.
});

export const calendar = style({
  // Styles for the calendar pop-up
  // Customize the look of the selected date, etc.
});

export const calendarWrapper = style({
  // Any additional wrapper styles you need
});

export const timePickerContainer = style([
  // TODO: '결혼식 시간 선택' 텍스트가 왼쪽에 오도록 정렬하기
  flex({
    align: 'flexStart',
    justify: 'flexStart',
    direction: 'row', // direction을 row로 바꿔서 옆으로 나란히 두기
  }),
  {
    fontSize: vars.fontSize['2x'],
    marginBottom: vars.space['2x'], // 아래 여백 추가
  },
]);

export const dropdown = style({
  // 네이티브 select 드롭다운 스타일
  appearance: 'none', // 네이티브 스타일 제거
  padding: vars.space['1x'],
  margin: vars.space['1x'],
  backgroundColor: vars.colors.white,
  borderColor: vars.colors.lightGray,
  borderRadius: vars.borderRadius['1x'],
  fontSize: vars.fontSize['2x'],
  cursor: 'pointer',

  // 선택됐을 때 테두리 색상 변경을 위한 가상 클래스
  selectors: {
    '&:focus': {
      borderColor: vars.colors.roseGold,
      outline: 'none',
    },
  },
});

export const galleryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: vars.space['2x'],
});

export const galleryHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: vars.space['2x'],
});


export const inputBoxContainer = style([
  // TODO: '결혼식 장소 선택' 텍스트가 왼쪽에 오도록 정렬하기
  flex({
    align: 'flexStart',
    justify: 'flexStart',
    direction: 'column',
  }),
  {
    fontSize: vars.fontSize['2x'],
  },
]);

export const imageBox = style({
  position: 'relative',
});

export const imagePreview = style({
  width: '100px', // 미리보기 이미지 너비 설정
  height: '100px', // 미리보기 이미지 높이 설정
  objectFit: 'cover', // 이미지 비율 유지
  borderRadius: vars.borderRadius['1x'], // 이미지 둥근 모서리
});

export const deleteButton = style({
  position: 'absolute',
  top: vars.space['0.5x'], // 상단에서 조금 떨어지게 설정
  right: vars.space['0.5x'], // 우측에서 조금 떨어지게 설정
  background: vars.colors.alertRed, // 버튼 배경색 설정
  color: 'white', // 버튼 텍스트색 설정
  border: 'none',
  borderRadius: '50%', // 원형 버튼
  width: '20px', // 버튼 크기
  height: '20px', // 버튼 크기
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  // 선택됐을 때 테두리 색상 변경을 위한 가상 클래스
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.alertRed, // 호버 상태일 때 배경색 변경
    },
  },
});

export const addButton = style({
  backgroundColor: vars.colors.roseGold, // 버튼 배경색
  color: 'white', // 버튼 텍스트색
  padding: vars.space['1x'],
  margin: vars.space['1x'],
  border: 'none',
  borderRadius: vars.borderRadius['1x'],
  cursor: 'pointer',
  fontSize: vars.fontSize['2x'],
});

export const addFileButton = style({
  padding: vars.space['2x'],
  backgroundColor: vars.colors.whitesmoke,
  color: vars.colors.white,
  borderRadius: vars.borderRadius['1x'],
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.colors.lightGray,
  },
});

export const dropArea = style({
  border: `2px dashed ${vars.colors.whitesmoke}`,
  borderRadius: vars.borderRadius['1x'],
  padding: vars.space['4x'],
  textAlign: 'center',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.colors.lightGray,
  },
  // 드래그 앤 드롭 영역의 스타일을 더 추가할 수 있습니다.
});

export const inputBoxStyle = style({
  width: '100%', // 부모 컨테이너의 너비에 맞게 설정
  marginBottom: vars.space['2x'], // InputBox 간의 간격 조정
});

export const datePickerHeaderText = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: vars.space['1x'], // or whatever space you want between the header and the picker
});