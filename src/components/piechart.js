import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'Entertainment' },
  { value: 10, label: 'Food & Groceries' },
  { value: 15, label: 'Cafe & Restaurants' },
  { value: 20, label: 'Investments' },
  { value: 25, label: 'Health & Beauty' },
  { value: 25, label: 'Travel' },
];

const size = {
  width: 450,
  height: 195,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  fontSize: 20,
}));

const Heading = styled('div')(({ theme }) => ({
  textAlign: 'center',
   marginBottom: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Heading>Budget</Heading>
      <PieChart
        series={[{ data, innerRadius: 60, outerRadius: 80 }]} 
        {...size}
        sx={{ margin: '0px', display: 'inline-block' }} 
      >
        <PieCenterLabel>total</PieCenterLabel>
      </PieChart>
    </div>
  );
}
