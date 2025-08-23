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
  Column,
  Row,
  Hr,
} from "@react-email/components";

const V3Booking = () => {
  return (
    <Html>
      <Head />
      <Preview>New Booking Confirmed - V3-9799316</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Alert Header */}
          <Section style={alertHeader}>
            <Heading style={alertTitle}>🔔 New Booking Alert</Heading>
            <Text style={alertSubtitle}>A customer has just booked your services</Text>
          </Section>

          {/* Urgent Action Required */}
          <Section style={urgentSection}>
            <Text style={urgentText}>⚡ ACTION REQUIRED: Please prepare for upcoming service</Text>
            <Text style={bookingId}>Booking ID: <strong>V3-9799316</strong></Text>
          </Section>

          {/* Service Confirmation */}
          <Section style={section}>
            <Heading style={h2}>📋 Booking Summary</Heading>
            <table style={summaryTable}>
              <tbody>
                <tr>
                  <td style={labelCell}>Service Request ID:</td>
                  <td style={highlightCell}>V3-9799316</td>
                </tr>
                <tr style={tableRowAlt}>
                  <td style={labelCell}>Booking Received:</td>
                  <td style={valueCell}>Thursday, August 21, 2025 12:22 PM</td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Services Booked */}
          <Section style={section}>
            <Heading style={h2}>🛠️ Services Booked</Heading>
            <table style={serviceTable}>
              <thead>
                <tr>
                  <th style={tableHeader}>Service Type</th>
                  <th style={tableHeader}>Package</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={serviceCell}>Window Cleaning</td>
                  <td style={serviceCell}>2 BHK (5 -6 Windows) (1,499)</td>
                </tr>
                <tr style={tableRowAlt}>
                  <td style={serviceCell}>Home Deep Cleaning</td>
                  <td style={serviceCell}>5 BHK Classsic (4,499)</td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Schedule - Priority Section */}
          <Section style={scheduleSection}>
            <Heading style={scheduleHeader}>🕐 Service Schedule - PRIORITY</Heading>
            <div style={scheduleCard}>
              <table style={scheduleTable}>
                <tbody>
                  <tr>
                    <td style={scheduleLabelCell}>Service Date:</td>
                    <td style={scheduleDateCell}>Friday, August 22, 2025</td>
                  </tr>
                  <tr>
                    <td style={scheduleLabelCell}>Service Time:</td>
                    <td style={scheduleTimeCell}>10 am to 1 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* Customer Information */}
          <Section style={section}>
            <Heading style={h2}>👤 Customer Information</Heading>
            
            {/* Contact Details */}
            <div style={customerCard}>
              <Text style={cardTitle}>Contact Details</Text>
              <table style={customerTable}>
                <tbody>
                  <tr>
                    <td style={labelCell}>Customer Name:</td>
                    <td style={highlightCell}>PRASAD R</td>
                  </tr>
                  <tr style={tableRowAlt}>
                    <td style={labelCell}>Phone Number:</td>
                    <td style={phoneCell}>9867370396</td>
                  </tr>
                  <tr>
                    <td style={labelCell}>Email:</td>
                    <td style={valueCell}>pranjyoth@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Service Address */}
            <div style={addressCard}>
              <Text style={cardTitle}>Service Location</Text>
              <table style={customerTable}>
                <tbody>
                  <tr>
                    <td style={labelCell}>Full Address:</td>
                    <td style={addressCell}>
                      FLAT NO 101, PRATHAM CASA SERENE, NO 8.5 M ROAD, JALAHALLI CROSS, 
                      T. DASARAHALLI, BENGALURU 560057
                    </td>
                  </tr>
                  <tr style={tableRowAlt}>
                    <td style={labelCell}>City:</td>
                    <td style={valueCell}>Bengaluru</td>
                  </tr>
                  <tr>
                    <td style={labelCell}>State:</td>
                    <td style={valueCell}>Karnataka, India</td>
                  </tr>
                  <tr style={tableRowAlt}>
                    <td style={labelCell}>Landmark:</td>
                    <td style={valueCell}>OPP KRISHNA CHANDRA CONVENTION HALL</td>
                  </tr>
                  <tr>
                    <td style={labelCell}>Pin Code:</td>
                    <td style={valueCell}>700156</td>
                  </tr>
                  <tr style={tableRowAlt}>
                    <td style={labelCell}>Additional:</td>
                    <td style={valueCell}>Map Url (clickable link)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* Action Footer */}
          <Section style={actionFooter}>
            <Text style={actionText}>Please ensure your team is prepared for this service appointment.</Text>
            <Hr style={footerDivider} />
            <Text style={systemNote}>
              Thank you for choosing our service. We look forward to serving you.
            </Text>
            <Text style={copyright}>
              © {new Date().getFullYear()} @V3Care.in. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default V3Booking;

// Internal Company Notification Styles
const main = {
  backgroundColor: "#f1f5f9",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  margin: "0",
  padding: "0",
  width: "100%",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "20px auto",
  padding: "0",
  width: "600px",
  maxWidth: "100%",
  border: "2px solid #e2e8f0",
};

// Alert Header
const alertHeader = {
  backgroundColor: "#dc2626",
  padding: "25px 40px",
  textAlign: "center",
};

const alertTitle = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 5px 0",
};

const alertSubtitle = {
  color: "#fecaca",
  fontSize: "14px",
  margin: "0",
  fontWeight: "400",
};

// Urgent Section
const urgentSection = {
  backgroundColor: "#fbbf24",
  padding: "20px 40px",
  textAlign: "center",
  borderBottom: "3px solid #f59e0b",
};

const urgentText = {
  color: "#92400e",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px 0",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const bookingId = {
  color: "#1f2937",
  fontSize: "18px",
  margin: "0",
  fontWeight: "500",
};

// Schedule Priority Section
const scheduleSection = {
  backgroundColor: "#fef3c7",
  padding: "25px 40px",
  borderLeft: "5px solid #f59e0b",
};

const scheduleHeader = {
  color: "#92400e",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0 0 15px 0",
  textTransform: "uppercase",
};

const scheduleCard = {
  backgroundColor: "#ffffff",
  border: "2px solid #f59e0b",
  padding: "20px",
};

const scheduleTable = {
  width: "100%",
  borderCollapse: "collapse",
};

const scheduleLabelCell = {
  width: "30%",
  padding: "8px 0",
  color: "#6b7280",
  fontWeight: "600",
  fontSize: "14px",
};

const scheduleDateCell = {
  padding: "8px 0",
  color: "#dc2626",
  fontWeight: "700",
  fontSize: "16px",
};

const scheduleTimeCell = {
  padding: "8px 0",
  color: "#1f2937",
  fontWeight: "600",
  fontSize: "16px",
};

// Regular Sections
const h2 = {
  color: "#1f2937",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 20px 0",
  paddingBottom: "8px",
  borderBottom: "2px solid #e5e7eb",
};

const section = {
  padding: "25px 40px",
  borderBottom: "1px solid #f3f4f6",
};

// Customer Cards
const customerCard = {
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  padding: "20px",
  marginBottom: "20px",
};

const addressCard = {
  backgroundColor: "#f0fdf4",
  border: "1px solid #bbf7d0",
  padding: "20px",
};

const cardTitle = {
  color: "#1f2937",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 15px 0",
  paddingBottom: "8px",
  borderBottom: "1px solid #d1d5db",
};

// Tables
const summaryTable = {
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid #d1d5db",
};

const serviceTable = {
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid #d1d5db",
  marginTop: "10px",
};

const customerTable = {
  width: "100%",
  borderCollapse: "collapse",
};

const labelCell = {
  width: "35%",
  padding: "12px 15px",
  color: "#6b7280",
  fontWeight: "600",
  fontSize: "13px",
  backgroundColor: "#f9fafb",
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top",
};

const valueCell = {
  padding: "12px 15px",
  color: "#1f2937",
  fontSize: "14px",
  fontWeight: "500",
  borderBottom: "1px solid #e5e7eb",
  lineHeight: "1.4",
};

const highlightCell = {
  padding: "12px 15px",
  color: "#dc2626",
  fontSize: "14px",
  fontWeight: "700",
  borderBottom: "1px solid #e5e7eb",
};

const phoneCell = {
  padding: "12px 15px",
  color: "#059669",
  fontSize: "14px",
  fontWeight: "700",
  borderBottom: "1px solid #e5e7eb",
};

const addressCell = {
  padding: "12px 15px",
  color: "#1f2937",
  fontSize: "14px",
  fontWeight: "500",
  borderBottom: "1px solid #e5e7eb",
  lineHeight: "1.5",
};

const tableRowAlt = {
  backgroundColor: "#f9fafb",
};

// Service Table
const tableHeader = {
  backgroundColor: "#374151",
  color: "#ffffff",
  padding: "15px 20px",
  textAlign: "left",
  fontWeight: "600",
  fontSize: "14px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const serviceCell = {
  padding: "15px 20px",
  color: "#374151",
  fontSize: "14px",
  fontWeight: "500",
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top",
};

// Footer
const actionFooter = {
  backgroundColor: "#f8fafc",
  padding: "25px 40px",
  textAlign: "center",
  borderTop: "2px solid #e2e8f0",
};

const actionText = {
  color: "#dc2626",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 20px 0",
};

const footerDivider = {
  borderColor: "#d1d5db",
  borderWidth: "1px 0 0 0",
  margin: "20px 0",
};

const systemNote = {
  color: "#4b5563",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0 0 10px 0",
  fontStyle: "italic",
};

const copyright = {
  color: "#9ca3af",
  fontSize: "12px",
  fontWeight: "400",
  margin: "0",
};