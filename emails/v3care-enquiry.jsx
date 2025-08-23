import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from "@react-email/components";

const V3CareEnquiry = () => {
  return (
    <Html>
      <Head />
      <Preview>New Customer Enquiry - V3Care Services</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section with Split Layout */}
          <Section style={header}>
            <div style={headerPattern}></div>
            <div style={headerContent}>
              <div style={logoColumn}>
                <img 
                  src="https://v3care.com/assets/v3logo-Bye1VR8z.png" 
                  alt="V3Care Logo" 
                  style={logo} 
                />
              </div>
              <div style={textColumn}>
                <Heading style={headerTitle}>New Customer Enquiry</Heading>
                <Text style={headerSubtitle}>V3Care Services</Text>
              </div>
            </div>
          </Section>

          {/* Enquiry Details */}
          <Section style={content}>
            <div style={card}>
              <div style={cardHeader}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={icon}>
                  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#059669" strokeWidth="2"/>
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#059669" strokeWidth="2"/>
                </svg>
                <Text style={cardTitle}>Customer Information</Text>
              </div>
              
              <div style={detailRow}>
                <Text style={label}>Name:</Text>
                <Text style={value}>Kamal Prasad</Text>
              </div>
              
              <div style={detailRow}>
                <Text style={label}>Phone:</Text>
                <Text style={value}>9876543210</Text>
              </div>
              
              <div style={detailRow}>
                <Text style={label}>Email:</Text>
                <Text style={value}>kamalparaasad123@gmail.com</Text>
              </div>
            </div>

            <div style={card}>
              <div style={cardHeader}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={icon}>
                  <path d="M8 10L12 14L16 10" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#059669" strokeWidth="2"/>
                </svg>
                <Text style={cardTitle}>Message</Text>
              </div>
              
              <div style={messageContent}>
                <Text style={messageText}>
                  "Hi, I would like to purchase the Home Deep Cleaning package. However, before proceeding, I would appreciate it if we could sit down and discuss a few details to ensure everything is clear."
                </Text>
              </div>
            </div>
          </Section>

          {/* Action Section */}
          <Section style={actionSection}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={actionIcon}>
              <circle cx="12" cy="12" r="10" stroke="#059669" strokeWidth="2"/>
              <path d="M12 8V12L15 15" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <Text style={actionText}>Please respond to this enquiry within 24 hours</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={divider} />
            <Text style={footerText}>
              This enquiry was received through the V3Care website contact form.
            </Text>
            <Text style={copyright}>
              © {new Date().getFullYear()} V3Care.in. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default V3CareEnquiry;

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: '20px 0',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: 0,
  width: '100%',
  maxWidth: '600px',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  overflow: 'hidden',
};

const header = {
  position: 'relative',
  padding: '25px 30px 20px',
  backgroundColor: '#f0fdf4',
  borderBottom: '1px solid #d1fae5',
  overflow: 'hidden',
};

const headerPattern = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: 'radial-gradient(#d1fae5 1px, transparent 1px)',
  backgroundSize: '15px 15px',
  opacity: 0.3,
};

const headerContent = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

const logoColumn = {
  flex: '0 0 auto',
  marginRight: '15px',
};

const textColumn = {
  flex: '1',
};

const logo = {
  height: '40px',
  width: 'auto',
};

const headerTitle = {
  color: '#065f46',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 4px 0',
  letterSpacing: '0.3px',
};

const headerSubtitle = {
  color: '#6b7280',
  fontSize: '13px',
  margin: '0',
  fontWeight: '400',
};

const content = {
  padding: '25px 30px',
};

const card = {
  backgroundColor: '#f9fafb',
  padding: '0',
  margin: '0 0 20px 0',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  overflow: 'hidden',
};

const cardHeader = {
  backgroundColor: '#ecfdf5',
  padding: '12px 16px',
  borderBottom: '1px solid #d1fae5',
  display: 'flex',
  alignItems: 'center',
};

const icon = {
  marginRight: '10px',
};

const cardTitle = {
  color: '#065f46',
  fontSize: '15px',
  fontWeight: '600',
  margin: '0',
};

const detailRow = {
  display: 'flex',
  padding: '12px 16px',
  borderBottom: '1px solid #f3f4f6',
};

const label = {
  color: '#4b5563',
  fontSize: '13px',
  fontWeight: '500',
  margin: '0',
  width: '70px',
  flexShrink: 0,
};

const value = {
  color: '#1f2937',
  fontSize: '13px',
  margin: '0',
  fontWeight: '400',
};

const messageContent = {
  padding: '16px',
};

const messageText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0',
  fontStyle: 'italic',
};

const actionSection = {
  backgroundColor: '#f0fdf4',
  padding: '20px 30px',
  textAlign: 'center',
  borderTop: '1px solid #d1fae5',
  borderBottom: '1px solid #d1fae5',
};

const actionIcon = {
  margin: '0 auto 10px',
  display: 'block',
};

const actionText = {
  color: '#065f46',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const footer = {
  padding: '25px 30px',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '0 0 16px 0',
};

const footerText = {
  color: '#6b7280',
  fontSize: '13px',
  margin: '0 0 10px 0',
  textAlign: 'center',
};

const copyright = {
  color: '#9ca3af',
  fontSize: '11px',
  margin: '0',
  textAlign: 'center',
};