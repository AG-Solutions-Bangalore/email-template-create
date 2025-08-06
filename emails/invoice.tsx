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
  Column,
  Row,
  Button,
  Hr,
} from "@react-email/components";

interface InvoiceEmailProps {
  orderNumber?: string;
  orderDate?: string;
  deliveryDate?: string;
  customerName?: string;
  customerAddress?: string;
  paymentMethod?: string;
  items?: {
    name: string;
    description: string;
    quantity: number;
    price: string;
    image: string;
  }[];
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
}


export const InvoiceEmail = ({
  orderNumber = "LOH12345678",

  orderDate = "August 05, 2025",
  deliveryDate = "August 08, 2025",
 
  items = [
    {
      name: "Fresh Organic Apples",
      description: "1kg pack of fresh organic apples",
      quantity: 2,
      price: "4.99",
      image: `https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg`,
    },
    {
      name: "Organic Whole Wheat Bread",
      description: "Freshly baked whole wheat bread",
      quantity: 1,
      price: "3.49",
      image: `https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg`,
    },
    {
      name: "Free Range Eggs",
      description: "Dozen free range eggs",
      quantity: 1,
      price: "5.99",
      image: `https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg`,
    },
  ],
  
  subtotal = "19.46",
  shipping = "2.99",
  tax = "1.17",
  total = "23.62",
}: InvoiceEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Lohiya's Order #{orderNumber}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src="https://i.postimg.cc/wvdBh9kD/lohiya1.png"
            width="150"
            height="50"
            alt="Lohiya's"
            style={logo}
          />
        </Section>

        <Section style={header}>
          <Heading style={h1}>Your Order is Confirmed!</Heading>
          <Text style={paragraph}>
            Thank you for shopping with Lohiya's. Your fresh groceries are being
            prepared and will be delivered soon.
          </Text>
          <Button
            style={button}
            href={`https://lohiyakitchen.com/orders/${orderNumber}`}
          >
            Track Your Order
          </Button>
        </Section>

        <Section style={section}>
 
  <Row>
    <Column>
      <Heading style={h2}>Order Details</Heading>
    </Column>
  </Row>


  <Row>
    <Column style={{ width: "50%" }}>
      <Text style={orderNumberCss}>Order Number: {orderNumber}</Text>
    </Column>
    <Column style={{ width: "50%", textAlign: "right" as const }}>
      <Text style={orderNumberCss}>{orderDate}</Text>
    </Column>
  </Row>
</Section>


        {items.map((item, index) => (
          <Row key={index} style={productRow}>
            <Column style={productImageColumn}>
              <Img
                src={item.image}
                width="120"
                height="120"
                alt={item.name}
                style={productImage}
              />
            </Column>
            <Column style={productDetailsColumn}>
              <Text style={productName}>{item.name}</Text>
              <Text style={productDescription}>{item.description}</Text>
              <Text style={productQuantity}>Quantity: {item.quantity}</Text>
            </Column>
            <Column style={productPriceColumn}>
              <Text style={productPrice}>{item.price}</Text>
            </Column>
          </Row>
        ))}

        <Section style={summarySection}>
          <Row>
            <Column style={{ width: "70%" }}>
              <Text style={summaryLabel}>Subtotal</Text>
            </Column>
            <Column style={{ width: "30%", textAlign: "right" as const }}>
              <Text style={summaryValue}>{subtotal}</Text>
            </Column>
          </Row>
          <Row>
            <Column style={{ width: "70%" }}>
              <Text style={summaryLabel}>Shipping</Text>
            </Column>
            <Column style={{ width: "30%", textAlign: "right" as const }}>
              <Text style={summaryValue}>{shipping}</Text>
            </Column>
          </Row>
          <Row>
            <Column style={{ width: "70%" }}>
              <Text style={summaryLabel}>Tax</Text>
            </Column>
            <Column style={{ width: "30%", textAlign: "right" as const }}>
              <Text style={summaryValue}>{tax}</Text>
            </Column>
          </Row>
          <Row>
            <Column style={{ width: "70%" }}>
              <Text style={totalLabel}>Total</Text>
            </Column>
            <Column style={{ width: "30%", textAlign: "right" as const }}>
              <Text style={totalValue}>{total}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={infoSection}>
          <Row>
            <Column style={infoColumn}>
              <Text style={infoHeading}>Ordered on:</Text>
              <Text style={infoText}>{orderDate}</Text>
            </Column>
            <Column style={infoColumn}>
              <Text style={infoHeading}>Arriving by:</Text>
              <Text style={infoText}>{deliveryDate}</Text>
            </Column>
          </Row>
        </Section>

        

        <Section style={ctaSection}>
          <Button
            style={button}
            href={`https://lohiyakitchen.com/orders/${orderNumber}`}
          >
            Track Your Order
          </Button>
        </Section>

        <Section style={recommendations}>
          <Heading style={h2}>You Might Also Like</Heading>
          <Text style={paragraph}>
            Check out these other fresh products from Lohiya's
          </Text>

          <Row style={productsRow}>
            <Column style={productColumn}>
              <Img
                src={`https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg`}
                width="150"
                height="150"
                alt="Organic Bananas"
                style={recommendedImage}
              />
              <Text style={recommendedPrice}>2.99/kg</Text>
              <Text style={recommendedName}>Organic Bananas</Text>
              <Link
                href="https://lohiyakitchen.com/shop/bananas"
                style={shopLink}
              >
                SHOP NOW
              </Link>
            </Column>
            <Column style={productColumn}>
              <Img
                src={`https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg`}
                width="150"
                height="150"
                alt="Organic Milk"
                style={recommendedImage}
              />
              <Text style={recommendedPrice}>4.49/liter</Text>
              <Text style={recommendedName}>Organic Milk</Text>
              <Link href="https://lohiyakitchen.com/shop/milk" style={shopLink}>
                SHOP NOW
              </Link>
            </Column>
          </Row>
        </Section>

        <Section style={customerService}>
          <Heading style={h2}>Exceptional Customer Service</Heading>
          <Text style={paragraph}>
            Our team is here to help with any questions about your order. We're
            committed to providing the freshest groceries and best service.
          </Text>
          <Button style={outlineButton} href="https://lohiyakitchen.com/contact">
            Contact Support
          </Button>
        </Section>

        <Section style={footer}>
          <Img
            src="https://i.postimg.cc/43wmySKb/lohiya.png"
            width="120"
            height="40"
            alt="Lohiya's"
            style={footerLogo}
          />
          <Text style={footerText}>
            Shop fresh groceries, fruits, vegetables, and essentials online at
            Lohiya's. Fast delivery, top quality, and affordable prices.
          </Text>
          <Hr style={hr} />
          <Text style={footerLinks}>
            <Link href="https://www.lohiyas.com" style={footerLink}>
              Home
            </Link>{" "}
            |
            <Link href="https://lohiyakitchen.com/shop" style={footerLink}>
              Shop
            </Link>{" "}
            |
            <Link href="https://lohiyakitchen.com/about" style={footerLink}>
              About Us
            </Link>{" "}
            |
            <Link href="https://lohiyakitchen.com/contact" style={footerLink}>
              Contact
            </Link>
          </Text>
          <Text style={copyright}>
            © {new Date().getFullYear()} Lohiya's. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default InvoiceEmail;

// Styles
const main = {
  backgroundColor: "#f7fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  width: "600px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
};

const logoContainer = {
  padding: "32px 0",
  textAlign: "center" as const,
  backgroundColor: "#003685",
};

const logo = {
  margin: "0 auto",
};

const header = {
  padding: "40px 48px",
  textAlign: "center" as const,
  backgroundColor: "#f0f8ff",
};

const h1 = {
  color: "#2d3748",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 16px",
  lineHeight: "1.2",
};

const h2 = {
  color: "#2d3748",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 16px",
  lineHeight: "1.2",
};

const paragraph = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 24px",
};

const button = {
  backgroundColor: "#003685",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "200px",
  padding: "12px",
  margin: "0 auto",
};

const outlineButton = {
  backgroundColor: "transparent",
  borderRadius: "5px",
  color: "#003685",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "200px",
  padding: "12px",
  margin: "0 auto",
  border: "2px solid #003685",
};

const section = {
  padding: "32px 48px",
  borderBottom: "1px solid #e2e8f0",

};

const orderNumberCss = {
  color: "#4a5568",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0",
};

const productRow = {
  padding: "24px 48px",
  borderBottom: "1px solid #e2e8f0",
};

const productImageColumn = {
  width: "120px",
  verticalAlign: "top" as const,
};

const productDetailsColumn = {
  padding: "0 24px",
  verticalAlign: "top" as const,
  width: "60%",
};

const productPriceColumn = {
  width: "20%",
  verticalAlign: "top" as const,
  textAlign: "right" as const,
};

const productImage = {
  borderRadius: "8px",
};

const productName = {
  color: "#2d3748",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 8px",
};

const productDescription = {
  color: "#718096",
  fontSize: "14px",
  margin: "0 0 8px",
};

const productQuantity = {
  color: "#718096",
  fontSize: "14px",
  margin: "0",
};

const productPrice = {
  color: "#2d3748",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0",
};

const summarySection = {
  padding: "24px 48px",
  borderBottom: "1px solid #e2e8f0",
};

const summaryLabel = {
  color: "#4a5568",
  fontSize: "16px",
  margin: "0 0 8px",
};

const summaryValue = {
  color: "#2d3748",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 8px",
};

const totalLabel = {
  color: "#2d3748",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "16px 0 0",
};

const totalValue = {
  color: "#003685",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "16px 0 0",
};

const infoSection = {
  padding: "24px 48px",
  borderBottom: "1px solid #e2e8f0",
};

const infoColumn = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 12px",
};

const infoHeading = {
  color: "#2d3748",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 8px",
};

const infoText = {
  color: "#4a5568",
  fontSize: "14px",
  margin: "0 0 8px",
};

const ctaSection = {
  padding: "40px 48px",
  textAlign: "center" as const,
};

const recommendations = {
  padding: "40px 48px",
  backgroundColor: "#f0f8ff",
  textAlign: "center" as const,
};

const productsRow = {
  margin: "24px 0 0",
};

const productColumn = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 12px",
};

const recommendedImage = {
  borderRadius: "8px",
  margin: "0 auto 12px",
};

const recommendedPrice = {
  color: "#4a5568",
  fontSize: "14px",
  margin: "0 0 8px",
};

const recommendedName = {
  color: "#2d3748",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 12px",
};

const shopLink = {
  color: "#003685",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
};

const customerService = {
  padding: "40px 48px",
  textAlign: "center" as const,
};

const footer = {
  padding: "32px 48px",
  backgroundColor: "#2d3748",
  color: "#ffffff",
  textAlign: "center" as const,
};

const footerLogo = {
  margin: "0 auto 16px",
};

const footerText = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 24px",
};

const hr = {
  borderColor: "#4a5568",
  margin: "24px 0",
};

const footerLinks = {
  color: "#e2e8f0",
  fontSize: "14px",
  margin: "0 0 16px",
};

const footerLink = {
  color: "#e2e8f0",
  textDecoration: "none",
  margin: "0 8px",
};

const copyright = {
  color: "#a0aec0",
  fontSize: "12px",
  margin: "0",
};
