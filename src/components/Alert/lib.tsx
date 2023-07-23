
const showAlert = (setModalVisible: Function, time?: number) => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, time || 3000);
};

export default showAlert;