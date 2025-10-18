import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from '@react-email/components';

export const VaishnavMail = () => (
  <Html>
    <Head />
    <Preview>Thank you for updating your membership data</Preview>
    <Body style={main}>
      <Container style={container}>
        

        {/* Profile Section - Single Column */}
        <Section style={contentSection}>
          <Text style={thankYouText}>Thank you for updating your membership data</Text>
          
          <Section style={profileCard}>
            <Row>
              <Column align="center">
                <Img
                  src="https://i.postimg.cc/J7ZC4pPB/logo-bg1.png"
                  width="60"
                  height="60"
                  alt="Profile Photo"
                  style={profileImage}
                />
              </Column>
            </Row>
            
            <Section style={infoSection}>
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>Category</Text>
                  <Text style={value}>Life Membership</Text>
                </Column>
              </Row>
              
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>Gender</Text>
                  <Text style={value}>Male</Text>
                </Column>
              </Row>
              
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>Full Name</Text>
                  <Text style={value}>Kartik Raj</Text>
                </Column>
              </Row>
              
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>DOB</Text>
                  <Text style={value}>19-09-1985</Text>
                </Column>
              </Row>
              
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>Ganti</Text>
                  <Text style={value}>Raj</Text>
                </Column>
              </Row>
              
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>Mobile</Text>
                  <Text style={value}>9874563210</Text>
                </Column>
              </Row>
              
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>Email</Text>
                  <Text style={value}>abc@gmail.com</Text>
                </Column>
              </Row>
              
              <Row style={infoRow}>
                <Column>
                  <Text style={label}>Address</Text>
                  <Text style={value}>abc street</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Status Section */}
          <Section style={statusSection}>
            <Text style={successText}>✓ Profile updated successfully</Text>
          </Section>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            If you face any difficulty, please contact <Link href="tel:+918867171061" style={phoneLink}>+91 8867171061</Link>
          </Text>
          <Text style={copyright}>
            © 2024 Vaishnav Community
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default VaishnavMail;

const main = {
  backgroundColor: '#fefefe',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '10px',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  borderRadius: '6px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  maxWidth: '500px',
};



const contentSection = {
  padding: '15px 20px',
};

const thankYouText = {
  color: '#FF5722',
  fontSize: '14px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0 0 15px 0',
};

const profileCard = {
  backgroundColor: '#FFFBF5',
  border: '1px solid #FFE0B2',
  borderRadius: '6px',
  padding: '15px',
  margin: '0 0 15px 0',
};

const profileImage = {
  borderRadius: '6px',
  border: '2px solid #FF9800',
  margin: '0 0 12px 0',
};

const infoSection = {
  margin: '0',
};

const infoRow = {
  margin: '8px 0',
  padding: '0',
};

const label = {
  color: '#666',
  fontSize: '12px',
  fontWeight: 'bold',
  margin: '0 0 2px 0',
  lineHeight: '1.2',
};

const value = {
  color: '#333',
  fontSize: '13px',
  fontWeight: 'normal',
  margin: '0',
  lineHeight: '1.3',
};

const statusSection = {
  textAlign: 'center' as const,
  padding: '10px',
  backgroundColor: '#F1F8E9',
  borderRadius: '4px',
  border: '1px solid #C5E1A5',
};

const successText = {
  color: '#4CAF50',
  fontSize: '13px',
  fontWeight: 'bold',
  margin: '0',
  textAlign: 'center' as const,
};

const footer = {
  padding: '12px 20px',
  background: 'linear-gradient(135deg, #FFF3E0 0%, #FFECB3 100%)',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#E65100',
  fontSize: '11px',
  fontWeight: '500',
  margin: '0 0 8px 0',
  lineHeight: '1.3',
};

const phoneLink = {
  color: '#E65100',
  textDecoration: 'underline',
};

const copyright = {
  color: '#666',
  fontSize: '10px',
  margin: '0',
};