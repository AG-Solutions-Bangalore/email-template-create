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
    Section,
    Button,
    Hr,
    Column,
    Row,
  } from "@react-email/components";
  
  interface FeedbackEmailProps {
    productName?: string;
    productImage?: string;
    companyName?: string;
    companyAddress?: string;
    companyLogo?: string;
    orderNumber?: string;
  }
  
  export const FeedbackEmail = ({
    productName = "Organic Milk",
    productImage = "https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg",
    companyName = "Lohiya's",
    companyAddress = "Jaydeva Jaynagar",
    companyLogo = "https://i.postimg.cc/wvdBh9kD/lohiya1.png",
    orderNumber = "LOH12345678",
  }: FeedbackEmailProps) => (
    <Html>
      <Head />
      <Preview>How did you like your {productName}? Share your experience! ⭐</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Gradient Background */}
          <Section style={logoContainer}>
            <Img
              src={companyLogo}
              width="140"
              height="46"
              alt={companyName}
              style={logo}
            />
          </Section>
  
          {/* Hero Section with Gradient */}
          <Section style={heroSection}>
            <div style={gradientOverlay}>
              <Heading style={heroHeading}>✨ How was your experience? ✨</Heading>
              <Text style={heroSubtext}>
                We'd love to hear your thoughts on your recent purchase
              </Text>
            </div>
          </Section>
  
          {/* Product Showcase Card */}
          <Section style={productCard}>
            <div style={cardInner}>
              <Row>
                <Column style={productImageColumn}>
                  <div style={imageContainer}>
                    <Img
                      src={productImage}
                      width="100"
                      height="100"
                      alt={productName}
                      style={productImageStyle}
                    />
                  </div>
                </Column>
                <Column style={productDetailsColumn}>
                  <Text style={productNameText}>{productName}</Text>
                  <Text style={orderNumberText}>Order #{orderNumber}</Text>
                  <div style={statusBadge}>
                    <Text style={statusText}>✅ Delivered</Text>
                  </div>
                </Column>
              </Row>
            </div>
          </Section>
  
          {/* Star Rating CTA */}
          <Section style={ratingSection}>
            <Text style={ratingTitle}>Rate your experience</Text>
            <div style={starsContainer}>
              <Text style={starsText}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
            </div>
            <Text style={ratingSubtext}>
              Your feedback helps us improve and guides other customers to make better choices.
            </Text>
            
            <Button
              style={primaryButton}
              href="https://lohiyakitchen.com/write-review"
            >
              <span style={buttonIcon}>✍️</span>
              <span style={buttonText}>Write a Review</span>
            </Button>
  
            <Text style={incentiveText}>
              💎 Get 10% off your next order when you review!
            </Text>
          </Section>
  
          <Hr style={modernDivider} />
  
          {/* Support Section with Icons */}
          <Section style={supportSection}>
            <div style={supportCard}>
              <Text style={supportIcon}>🛎️</Text>
              <Heading style={supportHeading}>Need help?</Heading>
              <Text style={supportText}>
                Not completely satisfied? Our friendly support team is here to make it right within 24 hours.
              </Text>
              
              <Button
                style={secondaryButton}
                href="https://lohiyakitchen.com/contact"
              >
                Contact Support
              </Button>
            </div>
          </Section>
  
          {/* Social Proof Section */}
          <Section style={socialProofSection}>
            <Text style={socialProofTitle}>Join 10,000+ happy customers</Text>
            <Row>
              <Column style={socialStatColumn}>
                <Text style={statNumber}>4.9</Text>
                <Text style={statLabel}>⭐ Rating</Text>
              </Column>
              <Column style={socialStatColumn}>
                <Text style={statNumber}>10K+</Text>
                <Text style={statLabel}>📦 Orders</Text>
              </Column>
              <Column style={socialStatColumn}>
                <Text style={statNumber}>98%</Text>
                <Text style={statLabel}>😊 Satisfaction</Text>
              </Column>
            </Row>
          </Section>
  
          {/* Enhanced Footer */}
          <Section style={footer}>
            <Img
              src={companyLogo}
              width="120"
              height="40"
              alt={companyName}
              style={footerLogo}
            />
            <Text style={footerTagline}>
              🌱 Fresh groceries delivered to your doorstep
            </Text>
            
            {/* Social Links */}
            <div style={socialLinksContainer}>
              <Link href="#" style={socialLink}>Facebook</Link>
              <Text style={socialSeparator}>•</Text>
              <Link href="#" style={socialLink}>Instagram</Link>
              <Text style={socialSeparator}>•</Text>
              <Link href="#" style={socialLink}>Twitter</Link>
            </div>
            
            <Hr style={footerDivider} />
            
            <Text style={addressText}>
              📍 {companyAddress}
            </Text>
            
            <Text style={footerLinks}>
              <Link href="https://lohiyakitchen.com" style={footerLink}>
                Shop
              </Link> • 
              <Link href="https://lohiyakitchen.com/about" style={footerLink}>
                About
              </Link> • 
              <Link href="https://lohiyakitchen.com/contact" style={footerLink}>
                Contact
              </Link> •
              <Link href="https://lohiyakitchen.com/privacy" style={footerLink}>
                Privacy
              </Link>
            </Text>
            
            <Text style={copyright}>
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </Text>
            
            <Text style={unsubscribe}>
              <Link href="https://lohiyakitchen.com/unsubscribe" style={unsubscribeLink}>
                Unsubscribe
              </Link> | 
              <Link href="https://lohiyakitchen.com/preferences" style={unsubscribeLink}>
                Email Preferences
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default FeedbackEmail;
  
  // Enhanced Styles
  const main = {
    backgroundColor: "#f0f4f8",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    lineHeight: "1.6",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "0",
    width: "600px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };
  
  const logoContainer = {
    padding: "40px 0",
    textAlign: "center" as const,
    background: "#003685",
    position: "relative" as const,
  };
  
  const logo = {
    margin: "0 auto",
    filter: "brightness(1.1)",
  };
  
  const heroSection = {
    padding: "0",
    textAlign: "center" as const,
    background: "#f0f8ff",
    position: "relative" as const,
  };
  
  const gradientOverlay = {
    padding: "50px 48px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
  };
  
  const heroHeading = {
    color: "#3b547c",
    fontSize: "32px",
    fontWeight: "800",
    margin: "0 0 12px",
    lineHeight: "1.2",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };
  
  const heroSubtext = {
    color: "#3b547c",
    fontSize: "18px",
    margin: "0",
    fontWeight: "400",
  };
  
  const productCard = {
    padding: "32px 48px",
    backgroundColor: "#ffffff",
  };
  
  const cardInner = {
    background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #e6f0ff",
    boxShadow: "0 4px 12px rgba(0, 54, 133, 0.08)",
  };
  
  const productImageColumn = {
    width: "120px",
    verticalAlign: "middle" as const,
  };
  
  const imageContainer = {
    background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
    borderRadius: "16px",
    padding: "10px",
    border: "2px solid #e6f0ff",
    display: "inline-block",
  };
  
  const productDetailsColumn = {
    paddingLeft: "24px",
    verticalAlign: "middle" as const,
  };
  
  const productImageStyle = {
    borderRadius: "12px",
    display: "block",
  };
  
  const productNameText = {
    color: "#1a365d",
    fontSize: "22px",
    fontWeight: "700",
    margin: "0 0 8px",
    lineHeight: "1.3",
  };
  
  const orderNumberText = {
    color: "#64748b",
    fontSize: "14px",
    margin: "0 0 12px",
    fontWeight: "500",
  };
  
  const statusBadge = {
    display: "inline-block",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    borderRadius: "20px",
    padding: "6px 12px",
  };
  
  const statusText = {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "600",
    margin: "0",
  };
  
  const ratingSection = {
    padding: "40px 48px",
    textAlign: "center" as const,
    background: "linear-gradient(135deg, #fafbff 0%, #f0f8ff 100%)",
  };
  
  const ratingTitle = {
    color: "#1e293b",
    fontSize: "24px",
    fontWeight: "700",
    margin: "0 0 16px",
  };
  
  const starsContainer = {
    margin: "16px 0",
    padding: "12px",
    background: "rgba(255, 215, 0, 0.1)",
    borderRadius: "12px",
    border: "2px dashed rgba(255, 215, 0, 0.3)",
  };
  
  const starsText = {
    fontSize: "28px",
    margin: "0",
    letterSpacing: "4px",
  };
  
  const ratingSubtext = {
    color: "#475569",
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "20px 0 32px",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  
  const primaryButton = {
    background: "linear-gradient(135deg, #003685 0%, #0052cc 100%)",
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "280px",
    padding: "16px 24px",
    margin: "0 auto 20px",
    boxShadow: "0 8px 20px rgba(0, 54, 133, 0.3)",
    transition: "all 0.3s ease",
    border: "none",
  };
  
  const buttonIcon = {
    marginRight: "8px",
    fontSize: "18px",
  };
  
  const buttonText = {
    fontSize: "16px",
  };
  
  const incentiveText = {
    color: "#7c3aed",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0",
    background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "1px solid #e9d5ff",
    display: "inline-block",
  };
  
  const modernDivider = {
    borderColor: "transparent",
    background: "linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)",
    height: "1px",
    margin: "0",
  };
  
  const supportSection = {
    padding: "40px 48px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  };
  
  const supportCard = {
    background: "linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid #fed7d7",
  };
  
  const supportIcon = {
    fontSize: "48px",
    margin: "0 0 16px",
    display: "block",
  };
  
  const supportHeading = {
    color: "#2d3748",
    fontSize: "22px",
    fontWeight: "700",
    margin: "0 0 16px",
  };
  
  const supportText = {
    color: "#4a5568",
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "0 0 24px",
  };
  
  const secondaryButton = {
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    borderRadius: "12px",
    color: "#003685",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "14px 28px",
    margin: "0 auto",
    border: "2px solid #003685",
    boxShadow: "0 4px 12px rgba(0, 54, 133, 0.15)",
  };
  
  const socialProofSection = {
    padding: "40px 48px",
    backgroundColor: "#f8fafc",
    textAlign: "center" as const,
  };
  
  const socialProofTitle = {
    color: "#1e293b",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 24px",
  };
  
  const socialStatColumn = {
    textAlign: "center" as const,
    padding: "0 16px",
  };
  
  const statNumber = {
    color: "#003685",
    fontSize: "24px",
    fontWeight: "800",
    margin: "0 0 4px",
    display: "block",
  };
  
  const statLabel = {
    color: "#64748b",
    fontSize: "14px",
    margin: "0",
    fontWeight: "500",
  };
  
  const footer = {
    padding: "40px 48px",
    background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    textAlign: "center" as const,
    color: "#ffffff",
  };
  
  const footerLogo = {
    margin: "0 auto 20px",
    filter: "brightness(1.2)",
  };
  
  const footerTagline = {
    color: "#cbd5e1",
    fontSize: "16px",
    margin: "0 0 24px",
    fontWeight: "500",
  };
  
  const socialLinksContainer = {
    margin: "20px 0",
  };
  
  const socialLink = {
    color: "#60a5fa",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0 8px",
  };
  
  const socialSeparator = {
    color: "#64748b",
    margin: "0 4px",
  };
  
  const footerDivider = {
    borderColor: "#475569",
    margin: "32px 0 24px",
  };
  
  const addressText = {
    color: "#94a3b8",
    fontSize: "14px",
    margin: "0 0 20px",
  };
  
  const footerLinks = {
    color: "#94a3b8",
    fontSize: "14px",
    margin: "0 0 20px",
    lineHeight: "1.5",
  };
  
  const footerLink = {
    color: "#60a5fa",
    textDecoration: "none",
    margin: "0 4px",
  };
  
  const copyright = {
    color: "#64748b",
    fontSize: "12px",
    margin: "0 0 16px",
  };
  
  const unsubscribe = {
    color: "#64748b",
    fontSize: "12px",
    margin: "0",
  };
  
  const unsubscribeLink = {
    color: "#64748b",
    textDecoration: "underline",
  };