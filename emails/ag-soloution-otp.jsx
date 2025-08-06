import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
  Button,
  Column,
  Row,
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

const AgSolutionOtp = ({ otpCode, userName = 'Customer' }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* Header with Logo */}
        <Section style={header}>
          <Img
            // src={`${baseUrl}/static/lohiya.png`}
            src={`https://i.postimg.cc/43wmySKb/lohiya.png`}
            width="180"
            height="50"
            alt="Lohiya"
            style={logo}
          />
        </Section>

        {/* Hero Section */}
        <Section style={hero}>
          <Heading style={heroText}>Your One-Time Password</Heading>
          <Text style={heroSubtext}>Hi {userName}, welcome back to Lohiya!</Text>
        </Section>

        {/* OTP Card */}
        <Section style={card}>
          <Text style={instructionText}>
            Use this code to verify your identity:
          </Text>
          <Section style={codeContainer}>
            <Text style={code}>{otpCode}</Text>
          </Section>
          <Text style={expiryText}>Valid for 10 minutes only</Text>
        </Section>

        {/* CTA Button */}
        <Section style={buttonContainer}>
          <Button href="https://lohiya.com/login" style={button}>
            Go to Login Page
          </Button>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Row>
            <Column style={footerColumn}>
              <Text style={footerHeading}>Need help?</Text>
              <Link href="mailto:support@lohiya.com" style={footerLink}>
                Contact Support
              </Link>
            </Column>
            <Column style={footerColumn}>
              <Text style={footerHeading}>Stay connected</Text>
              <Row>
                <Column style={socialIconWrapper}>
                  <Link href="https://facebook.com/lohiya">
                    <Img
                      src={`${baseUrl}/static/facebook-icon.png`}
                      width="24"
                      height="24"
                      alt="Facebook"
                      style={socialIcon}
                    />
                  </Link>
                </Column>
                <Column style={socialIconWrapper}>
                  <Link href="https://instagram.com/lohiya">
                    <Img
                      src={`${baseUrl}/static/instagram-icon.png`}
                      width="24"
                      height="24"
                      alt="Instagram"
                      style={socialIcon}
                    />
                  </Link>
                </Column>
                <Column style={socialIconWrapper}>
                  <Link href="https://twitter.com/lohiya">
                    <Img
                      src={`${baseUrl}/static/twitter-icon.png`}
                      width="24"
                      height="24"
                      alt="Twitter"
                      style={socialIcon}
                    />
                  </Link>
                </Column>
              </Row>
            </Column>
          </Row>
          <Text style={copyright}>
            © {new Date().getFullYear()} Lohiya. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

AgSolutionOtp.defaultProps = {
  otpCode: '459872',
  userName: 'Customer',
};

export default AgSolutionOtp;

// Modern Styling
const main = {
  backgroundColor: '#f7fafc',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
  margin: '32px auto',
  maxWidth: '100%',

  overflow: 'hidden',
};

const header = {
  padding: '32px 32px 16px',
  textAlign: 'center',
};

const logo = {
  margin: '0 auto',
};

const hero = {
  background: 'linear-gradient(135deg, #6b46c1 0%, #805ad5 100%)',
  color: '#ffffff',
  padding: '48px 32px',
  textAlign: 'center',
};

const heroText = {
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 12px',
  lineHeight: '1.3',
};

const heroSubtext = {
  fontSize: '16px',
  margin: '0',
  opacity: '0.9',
};

const card = {
  padding: '32px',
  margin: '24px',
  maxWidth: '90%',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  textAlign: 'center',
  
};

const instructionText = {
  fontSize: '16px',
  color: '#4a5568',
  margin: '0 0 24px',
};

const codeContainer = {
  background: 'linear-gradient(135deg, #f6f6f6 0%, #fafafa 100%)',
  borderRadius: '8px',
  margin: '0 auto 16px',
  padding: '16px',
  width: '80%',
};

const code = {
  color: '#2d3748',
  fontSize: '32px',
  fontWeight: '700',
  letterSpacing: '8px',
  lineHeight: '1',
  textAlign: 'center',
};

const expiryText = {
  fontSize: '14px',
  color: '#718096',
  margin: '16px 0 0',
};

const buttonContainer = {
  padding: '0 32px 32px',
  textAlign: 'center',
};

const button = {
  backgroundColor: '#6b46c1',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  padding: '14px 32px',
  textDecoration: 'none',
};

const footer = {
  backgroundColor: '#f7fafc',
  padding: '32px',
  color: '#4a5568',
};

const footerColumn = {
  padding: '0 16px',
  verticalAlign: 'top',
  width: '50%',
};

const footerHeading = {
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const footerLink = {
  color: '#6b46c1',
  fontSize: '14px',
  textDecoration: 'none',
};

const socialIconWrapper = {
  padding: '0 8px 0 0',
  width: 'auto',
};

const socialIcon = {
  display: 'block',
};

const copyright = {
  fontSize: '12px',
  margin: '24px 0 0',
  opacity: '0.7',
  textAlign: 'center',
};