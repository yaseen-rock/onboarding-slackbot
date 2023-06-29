export function addToChatCard() {
  const imageWidget = {
    image: {
      imageUrl: 'https://i.imgur.com/8cDlirX.png',
      altText: 'add-bot-to-chat',
    },
  };

  const cardHeader = {
    title: `⚠️ Add Bot to Chat to use /mypoint`,
  };

  const avatarWidget = {
    textParagraph: {
      text: `Sorry.This option is only available in Direct Chat. To know your points, Please add the bot to 1:1 chat and try again.`,
    },
  };

  const avatarSection = {
    widgets: [avatarWidget, imageWidget],
  };

  let data = {
    cardsV2: [
      {
        cardId: 'myPointsCard',
        card: {
          name: 'My Points Card',
          header: cardHeader,
          sections: [avatarSection],
        },
      },
    ],
  };
  return data;
}