import React, {useState ,useContext, useRef,useCallback}  from 'react'
import { Button, Text, View, Image } from "react-native"
import Container from '../../components/common/Container'
import styles from "./styles"
import InputCustom from '../../components/common/Input'
import CustomButton from '../../components/common/CustomButton'
import { icUserDefault } from "../../assets/icons"
import CountryPicker from 'react-native-country-picker-modal'
import { GlobalContext } from '../../context/Provider';
import { createContact } from '../../context/actions/contacts';
import ImagePicker from '../../components/common/ImagePicker'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
  const bottomRef=useRef(null)
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

  console.log("Enter")
    createContact(data)(contactDispatch)
  }
  const [countryCode, setCountryCode] = useState('VN');
  const [callingCode, setCallingCode] = useState('84');
  const onSelect = (country) => {
    console.log(country)
    setCountryCode(country.cca2)
    setCallingCode(country?.callingCode[0])
  }
  const handleOpenBottomSheet = () => {
      
    console.log('REF',bottomRef);
    
      bottomRef.current?.present();
    };
  const handleCloseBottomSheet = () => {
          
      bottomRef.current?.close();
    };
  
  return (<View style={styles.screen}>
    <Container>
      <Image style={styles.userDefault} source={icUserDefault} />

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
        <View>
        <CustomButton
        primary
        title="Close"
        onPress={handleCloseBottomSheet}
 
      />
        </View>
      </ImagePicker>


    </Container>

  </View>
  )
}
