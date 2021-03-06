import React, {useState ,useContext, useRef,useCallback}  from 'react'
import { Button, Text, View, Image ,TouchableOpacity,PermissionsAndroid,Platform,Linking} from "react-native"
import Container from '../../components/common/Container'
import styles from "./styles"
import InputCustom from '../../components/common/Input'
import CustomButton from '../../components/common/CustomButton'
import { icUserDefault } from "../../assets/icons"
import CountryPicker from 'react-native-country-picker-modal'
import { GlobalContext } from '../../context/Provider';
import { createContact } from '../../context/actions/contacts';
import ImagePicker from '../../components/common/ImagePicker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageCropPicker  from 'react-native-image-crop-picker';

const ERRORS={
  firstName:"Please enter first name !" ,
  lastName: "Please enter last name !",
  phone:"Please enter phone"
}


export default function CreateContact({ navigation, route }) {
  const {
    contactDispatch,
    contactStates: {
      createContacts:{data,
      loading,
      error}
    }
  } = useContext(GlobalContext);
   
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({}); 4
  const bottomRef = useRef(null);
  const [avatar,setAvatar]=useState(icUserDefault)

  const OPTIONS = [
    {
      id: "1",
      label: "Take from camera",
      icon: <MaterialIcons name='camera' size={20} />,
      onPress: async () => {
  
        
        if(Platform.OS=="android"){
          const permissionAndroid = await PermissionsAndroid.check('android.permission.CAMERA');
          
          console.log('permissionAndroid', permissionAndroid);
  
  
          if(permissionAndroid != PermissionsAndroid.RESULTS.granted){
            const reqPer = await PermissionsAndroid.request('android.permission.CAMERA');
  
            console.log('reqPer',reqPer);
            
            if (reqPer != 'granted') {
              
              // Linking.openSettings();
  
              return false;
            } else {
              ImageCropPicker?.openCamera({
                width: 300,
                height: 400,
                cropping: true,
                freeStyleCropEnabled:true,
              }).then(image => {
                console.log(image);

                setAvatar(image);
                handleCloseBottomSheet()
                

              }).catch(err => {
                console.log('Err',err);
                
              });
            }
          } else {
            ImageCropPicker?.openCamera({
              width: 300,
              height: 400,
              cropping: true,
              freeStyleCropEnabled:true,
  
            }).then(image => {
              setAvatar(image);
              handleCloseBottomSheet()

            }).catch(err => {
              console.log('Err',err);
              
            });
          }
        }
      
      
      }
    },
    {
      id: "2",
      label: "Choose from gallery",
      icon: <MaterialIcons name='photo' size={20} />,
      onPress: () => {
        ImageCropPicker?.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled:true,
    
          multiple: true,
        }).then(image => {
          console.log(image);
        });
      }
      
    }
  ]
  const handelChange = ({ name, value }) => {
    
    if (value && errors?.[name]) {
      setErrors((prev) => {
        return { ...prev,[name]: null }
      })
    }
    if (!value && !errors?.[name]) {

      setErrors((prev) => {
        return { ...prev,[name]: ERRORS?.[name] }
      })
    }
    setForm({ ...form, [name]: value });
  }

  const handleCreate = () => {
    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: ERRORS.firstName }
      })
    }
    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: ERRORS.lastName }
      })
    }
    if (!form.phone) {
      setErrors((prev) => {
        return { ...prev, phone: ERRORS.phone }
      })
    }
    const data = {
      first_name: form?.firstName,
      last_name: form?.lastName,
      phone_number: form?.phone,
      country_code:callingCode
    }
    createContact(data)(contactDispatch)
  }
  const [countryCode, setCountryCode] = useState('VN');
  const [callingCode, setCallingCode] = useState('84');
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCallingCode(country?.callingCode[0])
  }
  const handleOpenBottomSheet = () => {    
      bottomRef.current?.present();
    };
  const handleCloseBottomSheet = () => {    
      bottomRef.current?.dismiss();
    };
  
  return (<View style={styles.screen}>
    <Container>
      <Image style={styles.userDefault} source={avatar?.path ? {uri:avatar?.path}:icUserDefault} />

      <TouchableOpacity onPress={handleOpenBottomSheet}>
      <Text  style={styles.chooseText}>Choose image</Text>
        
      </TouchableOpacity>

      <InputCustom
        label="First name"
        name="firstName"
        onChangeText={handelChange}
        error={errors.firstName }
        placeholder="Enter first name"
      />
      <InputCustom
        label="Last name"
        name="lastName"
        onChangeText={handelChange}
        error={errors.lastName }
        placeholder="Enter last name"
      />
      <InputCustom
        label="Phone Number"
        name="phone"
        onChangeText={handelChange}
        error={errors.phone }
        placeholder="Enter phone"
        icon={<CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCountryNameButton={false}
            withAlphaFilter
          withCallingCode
          withCallingCodeButton
          
            withEmoji
          onSelect={onSelect}
          containerButtonStyle={{
            marginRight:10
          }}
        />
        }
      />

      <CustomButton
        primary
        title="Create"
        onPress={handleCreate}
        disabled={loading}
        loading={loading}
      />
 
      

      {/* Modal */}
      <ImagePicker bottomRef={bottomRef} >
        <View style={styles.optionContainer}> 
          {
            OPTIONS?.map((el) => {
              return <TouchableOpacity key={el?.id} onPress={el?.onPress}> 
                <View style={styles?.optionItem}>  
                  {el?.icon}
                  <Text  style={styles.optionLabel}>{ el?.label}</Text>
                </View>
              </TouchableOpacity>
            })
          }
        </View>
      </ImagePicker>


    </Container>

  </View>
  )
}
