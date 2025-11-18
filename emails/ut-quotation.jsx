import React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const QuotationEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>The United Traders – Quotation</Preview>

      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={sectionStyle}>
            <table width="100%">
              <tr>
                <td style={{ position: "relative", paddingBottom: "10px" }}>
                  {/* Email & Mobile */}
                  <div style={topRightBox}>
                    <div>Email : info@theunitedtraders.co.in</div>
                    <div>Mobile : 9845400122</div>
                  </div>

                  {/* Logo + Title */}
                  <table width="100%">
                    <tr>
                      <td width="80" valign="top">
                        <img
                          src="https://theunitedtraders.co.in//crmapi//public//assets//images//company_images//logo.png"
                          style={{ width: "80px", height: "auto" }}
                        />
                      </td>

                      <td align="center">
                        <div style={qTitle}>QUOTATIONS</div>
                        <div style={companyTitle}>
                          THE UNITED TRADERS (Regd.)
                        </div>
                        <div style={dealerLine}>
                          Dealers in : KRAFT PAPER & DUPLEX BOARD
                        </div>
                        <div style={addressLine}>
                          #1141, 2nd Main, 1st Cross, Hoskerehalli, BSK 3rd
                          Stage, Bangalore 560085
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Quotation Details */}
          <Section style={innerSection}>
            <table width="100%">
              <tr>
                <td width="60%" valign="top" style={{ fontSize: "12px" }}>
                  <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                    To, CARTON WORLD
                  </div>

                  <div>
                    83 BYRAVESHWARA INDS ESTATE, HEGGANHALLI PEENYA 2ND STAGE,
                    BANGALORE
                  </div>

                  <div style={{ marginTop: "10px" }}>Dear Sir,</div>
                </td>

                <td width="40%" align="right" style={{ fontSize: "12px" }}>
                  <div style={{ marginBottom: "5px" }}>
                    <strong>Date:</strong> 14-11-2025
                  </div>
                  <div>
                    <strong>Quotation Ref :</strong> UT/QT/2/2025-26
                  </div>
                </td>
              </tr>
            </table>

            <div style={{ marginTop: "10px", fontSize: "12px" }}>
              We take pleasure to offer Kraft Paper as per details
            </div>

            <div style={{ marginTop: "10px", fontSize: "12px" }}>
              <div>
                <strong>Mill :</strong> kasrthicj
              </div>
              <div>
                <strong>Deckle :</strong> 410 - 420 cms
              </div>
              <div>
                <strong>GSM Range :</strong> 120 - 250 GSM
              </div>
            </div>
          </Section>

          {/* Rate Table */}
          <Section style={rateSection}>
            <div style={rateTitle}>Rate Per Kg (Rs.)</div>

            <table width="100%" style={rateTable}>
              <thead>
                <tr>
                  <th style={th}>QUALITY</th>
                  <th style={th}>
                    BASIC <br />
                    (Freight Included)
                  </th>
                  <th style={th}>GST</th>
                  <th style={th}>INSURANCE</th>
                  <th style={th}>TOTAL EX.MILL</th>
                  <th style={th}>NET OF GST</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={td}>Max</td>
                  <td style={td}>34.00</td>
                  <td style={td}>54.00</td>
                  <td style={td}>566.00</td>
                  <td style={td}>7.00</td>
                  <td style={td}>78.00</td>
                </tr>

                <tr>
                  <td style={td}>230/LWC/REELS/MANGOOS/122/24/10*22</td>
                  <td style={td}>45.00</td>
                  <td style={td}>45.00</td>
                  <td style={td}>45.00</td>
                  <td style={td}>45.00</td>
                  <td style={td}>45.00</td>
                </tr>

                <tr>
                  <td style={td}>230/LWC/REELS</td>
                  <td style={td}>56.00</td>
                  <td style={td}>673.00</td>
                  <td style={td}>43.00</td>
                  <td style={td}>34.00</td>
                  <td style={td}>34.00</td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Conditions Section */}
          <Section style={conditionsSection}>
            <div>
              <strong>EXTRA CHARGES :</strong> FOR GYT - Rs 1.00 KG
            </div>

            <div style={{ marginTop: "10px" }}>
              <div>
                <strong>FREIGHT :</strong> Included
              </div>
              <div>
                <strong>PAYMENT :</strong> WITH IN 15 DAYS
              </div>
              <div>
                <strong>DELIVERY :</strong> 8 - 10 Days from order receipt
              </div>
              <div>
                <strong>FURNISH :</strong> INDIAN + IMPORTED waste
              </div>
              <div>
                <strong>SAMPLES :</strong> Disclosed
              </div>
            </div>

            <div style={{ marginTop: "15px" }}>
              We assure you of our prompt and efficient services.
            </div>

            <div style={{ marginTop: "15px" }}>Thanking You,</div>
            <div>Your's faithfully,</div>
            <div style={{ marginBottom: "30px" }}>
              For THE UNITED TRADERS (Regd.)
            </div>

            <div style={{ position: "relative", marginTop: "40px" }}>
              <img
                src="https://theunitedtraders.co.in//crmapi//public//assets//images//company_images//sign.jpeg"
                style={{
                  width: "120px",
                  position: "absolute",
                  top: "-65px",
                  left: "50px",
                }}
              />
              <div style={{ fontSize: "12px", marginTop: "80px" }}>
                Authorised Signatory
              </div>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default QuotationEmail;

/* ------------------------- STYLES ------------------------- */

const bodyStyle = {
  backgroundColor: "#f8fafc",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "16px 0",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  width: "100%",
  maxWidth: "840px",
  border: "1px solid #000",
  margin: "0 auto",
};

const sectionStyle = {
  padding: "20px",
  borderBottom: "2px solid #000",
};

const topRightBox = {
  position: "absolute",
  top: "20px",
  right: "20px",
  textAlign: "right",
  fontSize: "12px",
  lineHeight: "16px",
};

const qTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const companyTitle = {
  fontSize: "26px",
  fontWeight: "bold",
  marginBottom: "4px",
};

const dealerLine = {
  fontSize: "10px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const addressLine = {
  fontSize: "10px",
  maxWidth: "350px",
};

const innerSection = {
  padding: "15px",
  borderBottom: "1px solid #000",
};

const rateSection = {
  padding: "8px 16px",
};

const rateTitle = {
  textAlign: "center",
  fontSize: "12px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const rateTable = {
  border: "1px solid #000",
  borderCollapse: "collapse",
  fontSize: "12px",
};

const th = {
  border: "1px solid #000",
  padding: "6px",
};

const td = {
  border: "1px solid #000",
  padding: "6px",
};

const conditionsSection = {
  padding: "8px 16px",
  fontSize: "12px",
};
