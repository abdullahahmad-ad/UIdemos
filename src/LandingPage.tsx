import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Title, Text, Group, Card, Button, Stack, Grid } from '@mantine/core';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const napkins = [
    {
      id: 'lga-flow',
      demo: 'AC-14371: Large Government Agencies',
      color: '#0629D3' // Royal blue from the palette
    },
    {
      id: 'appinsights-ai',
      demo: 'AppInsights AI',
      color: '#f59e0b' // Amber/Orange - next color in flow
    },
    {
      id: 'company-flow',
      demo: 'Company Flow: Adobe Vendor Setup',
      color: '#0891b2' // Teal from AppDirect design system
    },
    {
      id: 'adobesyncui',
      demo: 'AC-14309: Adobe Sync UI',
      color: '#9333ea' // Purple - complementary to the existing colors
    }
  ];

  const handleNapkinClick = (napkinId: string) => {
    navigate(`/${napkinId}`);
  };

  const NapkinCard = ({ napkin, index }: { napkin: typeof napkins[0]; index: number }) => {
    return (
      <Card
        shadow="sm"
        padding="xl"
        radius="md"
        withBorder
        style={{
          border: `1px solid ${napkin.color}`,
          backgroundColor: 'rgba(248, 249, 250, 0.95)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'visible',
          animationDelay: `${index * 0.1}s`,
          opacity: 0,
          animation: 'slideInUp 0.6s ease-out forwards',
          animationFillMode: 'both'
        }}
        onClick={() => handleNapkinClick(napkin.id)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 8px 25px ${napkin.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Corner marks */}
        <Box style={{ position: 'absolute', top: -6, left: -6, width: 12, height: 12, borderRight: `2px solid ${napkin.color}`, borderBottom: `2px solid ${napkin.color}` }} />
        <Box style={{ position: 'absolute', top: -6, right: -6, width: 12, height: 12, borderLeft: `2px solid ${napkin.color}`, borderBottom: `2px solid ${napkin.color}` }} />
        <Box style={{ position: 'absolute', bottom: -6, left: -6, width: 12, height: 12, borderRight: `2px solid ${napkin.color}`, borderTop: `2px solid ${napkin.color}` }} />
        <Box style={{ position: 'absolute', bottom: -6, right: -6, width: 12, height: 12, borderLeft: `2px solid ${napkin.color}`, borderTop: `2px solid ${napkin.color}` }} />
        
        {/* Measurement lines */}
        <Box style={{ position: 'absolute', top: 20, right: -20, width: 20, height: 1, backgroundColor: napkin.color, opacity: 0.5 }} />
        <Box style={{ position: 'absolute', bottom: 20, right: -20, width: 20, height: 1, backgroundColor: napkin.color, opacity: 0.5 }} />

        {/* Single box with napkin name */}
        <Box
          style={{
            padding: '1rem 1.5rem',
            border: `1px solid ${napkin.color}`,
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            color: napkin.color,
            fontFamily: 'monospace',
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
            boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0.1)`
          }}
        >
          {napkin.demo}
        </Box>
      </Card>
    );
  };

  // Add CSS for blueprint theme
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes drawGrid {
        from {
          background-size: 0% 0%;
        }
        to {
          background-size: 40px 40px;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#F8F9FA',
        backgroundImage: `
          linear-gradient(rgba(8, 145, 178, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(8, 145, 178, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(8, 145, 178, 0.03) 0.5px, transparent 0.5px),
          linear-gradient(90deg, rgba(8, 145, 178, 0.03) 0.5px, transparent 0.5px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 10px 10px, 10px 10px',
        animation: 'drawGrid 1.5s ease-out forwards',
        position: 'relative'
      }}
    >
      {/* Blueprint decoration elements */}
      <Box 
        style={{ 
          position: 'absolute',
          top: 40,
          left: 40,
          width: 100,
          height: 100,
          border: '1px dashed rgba(8, 145, 178, 0.2)',
          borderRadius: '50%',
          animation: 'fadeIn 1s ease-out forwards',
          opacity: 0,
          animationDelay: '0.5s'
        }}
      />
      
      <Box 
        style={{ 
          position: 'absolute',
          bottom: 60,
          right: 80,
          width: 150,
          height: 150,
          border: '1px dashed rgba(6, 41, 211, 0.2)',
          borderRadius: '50%',
          animation: 'fadeIn 1s ease-out forwards',
          opacity: 0,
          animationDelay: '0.7s'
        }}
      />
      
      {/* Hero Section */}
      <Container size="lg" py="xl">
        <Stack align="center" gap="xl" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Box
            style={{
              position: 'relative',
              display: 'inline-block',
              padding: '0 10px'
            }}
          >
            <Title
              order={1}
              size="3rem"
              style={{
                background: 'linear-gradient(135deg, #011B58, #0629D3, #0891b2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'monospace',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                position: 'relative',
                zIndex: 2
              }}
            >
              AppConnectors UI Napkins
            </Title>
            
            {/* Blueprint measurement lines */}
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                left: -20,
                width: '20px',
                height: '1px',
                backgroundColor: '#0891b2',
                opacity: 0.6
              }}
            />
            
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                right: -20,
                width: '20px',
                height: '1px',
                backgroundColor: '#0891b2',
                opacity: 0.6
              }}
            />
            
            {/* Blueprint title underline */}
            <Box
              style={{
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: 2,
                background: 'linear-gradient(90deg, transparent, #0629D3, transparent)',
                borderRadius: '2px',
              }}
            />
          </Box>
          
          {/* Technical drawing elements */}
          <Group gap="xs" style={{ opacity: 0.5 }}>
            <Box w={20} h={2} bg="#0891b2" style={{ borderRadius: '1px' }} />
            <Box w={8} h={8} bg="#0629D3" style={{ borderRadius: '50%' }} />
            <Box w={20} h={2} bg="#0891b2" style={{ borderRadius: '1px' }} />
          </Group>
        </Stack>

        {/* Napkins Grid */}
        <Grid gutter="xl" justify="center">
          {napkins.map((napkin, index) => (
            <Grid.Col key={napkin.id} span={{ base: 12, md: 6, lg: 4 }}>
              {napkin.id === 'company-flow' || napkin.id === 'adobesyncui' ? null : <NapkinCard napkin={napkin} index={index} />}
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage; 