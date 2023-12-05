const PREFIX = '[ERROR]';

const MESSAGES = Object.freeze({
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  dateQuery: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menuQuery:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  dateInformation(date) {
    return `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리보기!`;
  },
  HEADERS: {
    menu: '<주문 메뉴>',
    totalAmountBeforeDiscount: '<할인 전 총 주문 금액>',
    giveawayMenu: '<증정 메뉴>',
    promotionHistory: '<혜택 내역>',
    totalPromotionAmount: '<총 혜택 금액>',
    totalAmountAfterDiscount: '<할인 후 예상 결제 금액>',
    decemberBadgeEvent: '<12월 이벤트 배지>',
  },
  none: '없음',
  amount: '원',
  badges: {
    star: '별',
    tree: '트리',
    santa: '산타',
  },
  menuDelimiter: ',',
  nameAndCountDelimiter: '-',
  printCount: '개',
  invalidDate: `${PREFIX} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  invalidMenu: `${PREFIX} 유효하지 않은 메뉴입니다. 다시 입력해 주세요.`,
  lineBreak: '',
});

export default MESSAGES;
