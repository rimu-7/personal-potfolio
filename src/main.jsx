import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-green-200 text-neutral-900 ' >
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)

