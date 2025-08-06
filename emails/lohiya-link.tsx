import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';

interface LohiyaLoginEmailProps {
  loginCode?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const LohiyaLoginEmail = ({
  loginCode,
}: LohiyaLoginEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Lohiya login code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://i.postimg.cc/43wmySKb/lLohiya.png" // Replace with Lohiya logo if different
          width="120"
          height="40"
          alt="Lohiya"
          style={{ margin: '20px 0' }}
        />
        <Heading style={h1}>Welcome back to Lohiya!</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Here's your temporary login code:
        </Text>
        <code style={code}>{loginCode}</code>
        <Text style={{ ...text, marginBottom: '14px' }}>
          This code will expire in 15 minutes. For security reasons, please don't share it with anyone.
        </Text>
        <Link
          href="https://www.Lohiya.com/login" // Replace with your actual login URL
          target="_blank"
          style={{
            ...link,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Click here to go directly to the login page
        </Link>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          If you didn't request this login, please secure your account by changing your password immediately.
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }}
        >
          Need help? Visit our <Link href="https://www.Lohiya.com/support" style={link}>support center</Link> or contact our customer service team.
        </Text>
        <Text style={footer}>
          <Link
            href="https://www.Lohiya.com"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            Lohiya.com
          </Link>
          <br />
          Your trusted online destination for fresh groceries and household essentials.
          <br />
          Fast delivery, top quality, and affordable prices.
        </Text>
      </Container>
    </Body>
  </Html>
);

LohiyaLoginEmail.PreviewProps = {
  loginCode: 'Lohiya-1234-abcd-5678',
} as LohiyaLoginEmailProps;

export default LohiyaLoginEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
  maxWidth: '600px',
};

const h1 = {
  color: '#4CAF50', // Green color matching your brand
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '20px 0',
  padding: '0',
};

const link = {
  color: '#4CAF50', // Green color matching your brand
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
  lineHeight: '1.5',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
  fontFamily: 'monospace',
  fontSize: '18px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};