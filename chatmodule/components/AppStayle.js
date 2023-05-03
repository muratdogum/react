import {
  StyleSheet,
  StatusBar,
} from 'react-native';
const styles = StyleSheet.create({
  frame: {
    padding: 0,
    marginTop: StatusBar.currentHeight,
    height: '100%',
    borderRadius: 10,
  },
  leftMenu: {
    left: 0,
    top: 80,
    bottom: 0,
    width: '70%',
    flex: 1,

    backgroundColor: '#FFF',
    padding: 10,
    zIndex: 100,
    position: 'absolute',
    height: '100%',
  },
  tweetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 15,
    marginRight: 15,
  },
  menuItem: {
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  menuItemText: {
    color: '#9400D3',
    fontSize: 18,
    fontWeight: 'bold',
  },

  menuItemIcon: {
    fontWeight: 'bold',
    marginRight: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    position: 'absolute',
    top: 20,
    left: 0,
  },
  tweetContent: {
    flex: 1,
    marginLeft: 60,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tweetText: {
    fontSize: 12,
    textAlign: 'justify',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height:80,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuButton: {
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    backgroundColor: '#9400D3',
    borderRadius: 50,
    padding: 18,
    zIndex: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    maxWidth: 500,
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginTop: 30,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  imagePickerButton: {
    backgroundColor: '#3e8bff',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  imagePickerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    position: 'absolute', // modalContent bileşenine göre absolute pozisyon
    top: 5,
    right: 5,
  
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
   closeButtonimage: {
    backgroundColor: '#ff3300',
    borderRadius: 5,
    padding: 10,
    position: 'absolute', // modalContent bileşenine göre absolute pozisyon
    top: 0,
    right: 0,
    zIndex:10
  
  },
  closeButtonTextimage: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imagePreview: {
    width: '30%',
    height: 150,
    borderRadius: 10,
    marginTop: 20,
    marginRight:10,
  },
   imagePreview2: {
    width: '100%',
    height: 150,
    borderRadius: 10,
   
  },
    containermessage: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  
    marginVertical: 5,
    flexDirection: 'row', 
    alignItems: 'center',
     justifyContent: 'space-between', 
    padding: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView:{
    padding:5,
    paddingBottom:100,
    marginBottom:100,
  },
   containerChat: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageRigt: {
    backgroundColor: '#3e8bff', //'#f8f8f8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: 'flex-end', //'flex-start',
    maxWidth: '80%',
    color:'#fff',
    width:'60%',
  },
  messageLeft: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    width:'60%',
  },
  messageText: {
    fontSize: 16,
  },
  messageDate: {
    fontSize: 12,
    color: '#888',
  },
   messageDateRigt: {
    fontSize: 12,
    color: '#fff',
  },
  inputContainerChat: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  messageImage: {
  width: 200,
  height: 200,
  borderRadius: 10,
  zIndex:15,
},
header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuButton2: {
    marginRight: 10,
  },
  iconButton2: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    marginLeft:15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    fontSize: 12,
    color: '#666',
  },
   chatRoomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatRoomImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatRoomTextContainer: {
    flex: 1,
  },
  chatRoomName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatRoomLastMessage: {
    color: '#666',
  },
  chatRoomLastMessageDate: {
    fontSize: 12,
    color: '#666',
  },
   container6: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#8A2BE2',
    padding: 10,
    height: 60,
  },
  backButton: {
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    paddingHorizontal: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: 30,
  },
  profileImage3: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#8A2BE2',
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },
  input3: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#444',
  },
    container7: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default styles;