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
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const ProfileUpdateRequest = () => (
  <Html>
    <Head />
    <Preview>Update Your Profile - Agrawal Samaj Karnataka</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src="https://www.agrawalsamaj.co/assets/web_assets/image/logo.png"
            width="150"
            height="50"
            alt="Agrawal Samaj Karnataka"
          />
          <Hr style={hr} />
          <Text style={heading}>Agrawal Samaj Karnataka</Text>
          <Text style={paragraph}>
            Dear Member,
          </Text>
          <Text style={paragraph}>
            Your profile is not updated. Please update your profile to stay connected with the community.
          </Text>
          <Button style={button} href="https://login.agrawalsamaj.co/">
            Update Profile Now
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            If you have any questions or need assistance, feel free to reach out to our support team.
          </Text>
          <Text style={paragraph}>
            — Agrawal Samaj Karnataka Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Agrawal Samaj Karnataka, Connecting the Community
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ProfileUpdateRequest;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const heading = {
  color: '#525f7f',
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '32px',
  textAlign: 'center' as const,
};

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#4CAF50',
};

const button = {
  backgroundColor: '#4CAF50',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
