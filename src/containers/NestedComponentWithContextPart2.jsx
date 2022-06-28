import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../components/NestedComponentWithContextPart2Section.jsx';
import Heading from '../components/NestedComponentWithContextPart2Header.jsx';

const NestedComponentWithContext = () => {
  return (
    <Box sx={{ p: 2, border: '1px dashed grey', backgroundColor: '#e0f2fe' }}>
      <Typography variant="h5">NestedComponent (Context Auto Level)</Typography>
      {/* Di sini kita tidak perlu definisi level lagi karena sudah otomatis */}
      {/* Terbaca dan ditambah */}
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponentWithContext;