const addGoalNotificationAsync = async (data) => {
  console.log('here', data)
  const notificationDocEn = await firestore.collection('Notifications').where('language', '==', 'en').get();
  const notificationDocFr = await firestore.collection('Notifications').where('language', '==', 'fr').get();
  if (notificationDocEn.docs && notificationDocFr.docs) {
    await notificationDocEn.docs[0].ref.update({
      // eslint-disable-next-line import/no-named-as-default-member
      titles: firebase.firestore.FieldValue.arrayUnion(
          data.titleEn
      ),
      // eslint-disable-next-line import/no-named-as-default-member
      messages: firebase.firestore.FieldValue.arrayUnion(
          data.desEn
      )
    });
    await notificationDocFr.docs[0].ref.update({
      // eslint-disable-next-line import/no-named-as-default-member
      titles: firebase.firestore.FieldValue.arrayUnion(
          data.titleFr
      ),
      // eslint-disable-next-line import/no-named-as-default-member
      messages: firebase.firestore.FieldValue.arrayUnion(
          data.desFr
      )
    });
  }
};