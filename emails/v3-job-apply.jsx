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

const V3JobApply = () => {
  
  const candidateData = {
    name: "Dilip Kumar",
    phone: "9876543210",
    email: "dilipkumar@gmail.com",
    branchCity: "Bengaluru",
    experience: "2 years",
    skills: "React JS, Next.js, Node.js, JavaScript, HTML5, CSS3, MongoDB"
  };

  return (
    <Html>
      <Head />
      <Preview>New Application: {candidateData.name} - {candidateData.experience} Experience</Preview>
      <Body style={main}>
        <Container style={container}>
          
          {/* Simple Header */}
          <Section style={header}>
            <Heading style={title}>New Job Application</Heading>
            <Text style={subtitle}>Application ID: #JA{Math.floor(Math.random() * 9000) + 1000}</Text>
          </Section>

          {/* Candidate Card */}
          <Section style={candidateSection}>
            <div style={candidateCard}>
              <div style={candidateHeader}>
                <div style={candidateInfo}>
                  <Heading style={candidateName}>{candidateData.name}</Heading>
                  <Text style={candidateDetails}>{candidateData.branchCity} • {candidateData.experience}</Text>
                  <Text style={candidateContact}>{candidateData.phone} • {candidateData.email}</Text>
                </div>
              </div>
              
              <div style={skillsSection}>
                <Text style={skillsLabel}>Job Skills:</Text>
                <Text style={skillsText}>{candidateData.skills}</Text>
              </div>
            </div>
          </Section>

          {/* Action Section */}
          <Section style={actionSection}>
            <Text style={actionText}>Please review this candidate and take appropriate action.</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={divider} />
            <Text style={footerText}>
              Application submitted via V3Care Careers Portal
            </Text>
            <Text style={copyright}>
              © {new Date().getFullYear()} V3Care Technologies. All rights reserved.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
};

export default V3JobApply;

// Compact Modern Styles
const main = {
  backgroundColor: "#f8fafc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: "0",
  padding: "16px 0",
  lineHeight: "1.5",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "580px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e5e7eb",
};

// Header Styles
const header = {
  backgroundColor: "#059669",
  padding: "20px 24px",
  textAlign: "center",
};

const title = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 4px 0",
};

const subtitle = {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "13px",
  margin: "0",
  fontWeight: "400",
};

const statusBadge = {
  position: "absolute",
  top: "16px",
  right: "20px",
  backgroundColor: "#fbbf24",
  color: "#92400e",
  padding: "4px 8px",
  borderRadius: "12px",
  fontSize: "10px",
  fontWeight: "600",
};

// Candidate Section
const candidateSection = {
  padding: "20px 24px",
};

const candidateCard = {
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  padding: "20px",
  border: "1px solid #e5e7eb",
};

const candidateHeader = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "16px",
};

const avatarPlaceholder = {
  width: "48px",
  height: "48px",
  borderRadius: "8px",
  backgroundColor: "#7c3aed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700",
  flexShrink: "0",
};

const candidateInfo = {
  flex: "1",
};

const candidateName = {
  color: "#111827",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0 0 4px 0",
};

const candidateDetails = {
  color: "#6b7280",
  fontSize: "13px",
  margin: "0 0 4px 0",
  fontWeight: "500",
};

const candidateContact = {
  color: "#059669",
  fontSize: "13px",
  margin: "0",
  fontWeight: "500",
};

// Skills Section
const skillsSection = {
  borderTop: "1px solid #e5e7eb",
  paddingTop: "16px",
};

const skillsLabel = {
  color: "#374151",
  fontSize: "13px",
  fontWeight: "600",
  margin: "0 0 6px 0",
};

const skillsText = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
  backgroundColor: "#ffffff",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
};

// Action Section
const actionSection = {
  padding: "16px 24px",
  backgroundColor: "#fef3c7",
  borderTop: "1px solid #f3f4f6",
  textAlign: "center",
};

const actionText = {
  color: "#92400e",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

// Footer
const footer = {
  padding: "16px 24px",
  backgroundColor: "#f9fafb",
  textAlign: "center",
};

const divider = {
  borderColor: "#e5e7eb",
  borderWidth: "1px 0 0 0",
  margin: "0 0 12px 0",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "0 0 6px 0",
  fontWeight: "500",
};

const copyright = {
  color: "#9ca3af",
  fontSize: "11px",
  margin: "0",
  fontWeight: "400",
};