import {Avatar, Col, Form} from "antd";
import {useEffect, useState} from "react";
import Styled from './Settings.styled';
import {UserOutlined} from "@ant-design/icons";
import LOCALE from './Settings.locale';
import Button from "../../components/Button/Button";

const {
  Container,
  Block,
  FullName,
  Address,
  Level,
  InfoContainer,
  Row,
  FormsContainer,
  Field,
  Input,
  ButtonsContainer
} = Styled

const personInfoFields = [
  {
    label: LOCALE.FirstName,
    key: "firstName",
    type: 'input'
  },
  {
    label: LOCALE.LastName,
    key: "lastName",
    type: 'input'
  },
  {
    label: LOCALE.Birthday,
    key: "birthday",
    type: 'date'
  },
  {
    label: LOCALE.Email,
    key: "email",
    type: 'input'
  },
  {
    label: LOCALE.Phone,
    key: "phone",
    type: 'input'
  },
]

const addressInfoFields = [
  {
    label: LOCALE.Country,
    key: "country",
    type: 'input'
  },
  {
    label: LOCALE.City,
    key: "city",
    type: 'input'
  },
  {
    label: LOCALE.ActualAddress,
    key: "actualAddress",
    type: 'input'
  },
  {
    label: LOCALE.PostalCode,
    key: "postalCode",
    type: 'input'
  },
]

const Settings = ({userInfo: {personInfo, addressInfo}, setPersonInfo, setAddressInfo}) => {
  const [isPersonInfoEdit, setIsPersonInfoEdit] = useState(false);
  const [isAddressInfoEdit, setIsAddressInfoEdit] = useState(false);

  const [personInfoForm] = Form.useForm();
  const [addressInfoForm] = Form.useForm();

  useEffect(() => {
    setInitPersonInfo()
    setInitAddressInfo()
  }, []);

  const setInitPersonInfo = () => {
    const birthday = personInfo.birthday.toLocaleDateString("fr-CA");

    personInfoForm.setFieldsValue({
      ...personInfo,
      birthday
    })
  }

  const editPersonInfo = () => {
    setIsPersonInfoEdit(true);
  }

  const savePersonInfo = (data) => {
    setPersonInfo(data);
    setIsPersonInfoEdit(false);
  }

  const resetPersonInfo = () => {
    setInitPersonInfo()
    setIsPersonInfoEdit(false);
  }

  const setInitAddressInfo = () => {
    addressInfoForm.setFieldsValue(addressInfo)
  }

  const editAddressInfo = () => {
    setIsAddressInfoEdit(true);
  }

  const saveAddressInfo = (data) => {
    setAddressInfo(data)
    setIsAddressInfoEdit(false);
  }

  const resetAddressInfo = () => {
    setInitAddressInfo()
    setIsAddressInfoEdit(false);
  }

  return (
    <Container>
      <Block>
        <InfoContainer>
          <Avatar size={100} icon={<UserOutlined />} />
          <div>
            <FullName>{personInfo.firstName} {personInfo.lastName}</FullName>
            <Level>Vip-status</Level>
            <Address>{addressInfo.country}, {addressInfo.city}, {addressInfo.actualAddress}</Address>
          </div>
        </InfoContainer>

      </Block>
      <FormsContainer>
        <Block>
          <Form style={{ display: 'flex', width: '100%' }} form={personInfoForm} layout="vertical" onFinish={savePersonInfo}>
            <Row>
              { personInfoFields.map((item) => (
                <Col span={10} key={item.key}>
                  <Field label={item.label} name={item.key}>
                    <Input
                      type={item.type}
                      disabled={!isPersonInfoEdit}
                      variant={isPersonInfoEdit ? "outlined" : "borderless"}
                    />
                  </Field>
                </Col>
              )) }
            </Row>
            <ButtonsContainer>
              <Button
                key={isPersonInfoEdit ? 'edit' : 'save'}
                onClick={!isPersonInfoEdit ? editPersonInfo : undefined}
                htmlType={isPersonInfoEdit ? "submit" : undefined}
              >
                {
                  isPersonInfoEdit
                    ? LOCALE.Save
                    : LOCALE.Edit
                }
              </Button>
              {isPersonInfoEdit && (
                <Button onClick={resetPersonInfo}>
                  {LOCALE.Cancel}
                </Button>
              )}
            </ButtonsContainer>
          </Form>
        </Block>
        <Block>
          <Form style={{ display: 'flex', width: '100%' }} form={addressInfoForm} layout="vertical" onFinish={saveAddressInfo}>
            <Row>
              { addressInfoFields.map((item) => (
                <Col span={10} key={item.key}>
                  <Field label={item.label} name={item.key}>
                    <Input
                      type={item.type}
                      disabled={!isAddressInfoEdit}
                      variant={isAddressInfoEdit ? "outlined" : "borderless"}
                    />
                  </Field>
                </Col>
              )) }
            </Row>
            <ButtonsContainer>
              <Button
                key={isAddressInfoEdit ? 'edit' : 'save'}
                onClick={!isAddressInfoEdit ? editAddressInfo : undefined}
                htmlType={isAddressInfoEdit ? "submit" : undefined}
              >
                {
                  isAddressInfoEdit
                    ? LOCALE.Save
                    : LOCALE.Edit
                }
              </Button>
              {isAddressInfoEdit && (
                <Button onClick={resetAddressInfo}>
                  {LOCALE.Cancel}
                </Button>
              )}
            </ButtonsContainer>
          </Form>
        </Block>
      </FormsContainer>
    </Container>
  )
}

export default Settings;