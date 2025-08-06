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

export const Welcome = () => (
  <Html>
    <Head />
    <Preview>Welcome to Lohiya's - Your Trusted E-Grocery Store!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src="https://i.postimg.cc/43wmySKb/lohiya.png"
            width="150"
            height="50"
            alt="Lohiya's"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            Welcome to Lohiya's! We're thrilled to have you as our valued customer.
          </Text>
          <Text style={paragraph}>
            Now you can shop fresh groceries, fruits, vegetables, and essentials from the comfort of your home. Enjoy fast delivery, top quality products, and affordable prices - everything you expect from your trusted local e-grocery store.
          </Text>
          <Button style={button} href="https://www.lohiyas.com/shop">
            Start Shopping Now
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            New to online grocery shopping? Check out our{' '}
            <Link style={anchor} href="https://www.lohiyas.com/how-it-works">
              how it works
            </Link>{' '}
            guide.
          </Text>
          <Text style={paragraph}>
            For your first order, use the code <strong>WELCOME10</strong> to get 10% off. This offer is valid for the next 7 days.
          </Text>
          <Text style={paragraph}>
            We offer multiple delivery slots throughout the day. You can check available delivery times in your area on our{' '}
            <Link style={anchor} href="https://www.lohiyas.com/delivery">
              delivery information page
            </Link>
            .
          </Text>
          <Text style={paragraph}>
            If you have any questions about our products or services, please visit our{' '}
            <Link style={anchor} href="https://www.lohiyas.com/faq">
              FAQ page
            </Link>{' '}
            or contact our customer support team.
          </Text>
          <Text style={paragraph}>Happy shopping!</Text>
          <Text style={paragraph}>— The Lohiya's Team</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Lohiya's E-Grocery, Fresh Products Delivered to Your Doorstep
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Welcome;

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