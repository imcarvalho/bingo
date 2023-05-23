import React from 'react';
import { createRoot } from 'react-dom/client';
import { Bingo } from './components/Bingo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Bingo />);
