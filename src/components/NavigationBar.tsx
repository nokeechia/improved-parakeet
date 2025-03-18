'use client';

import { AppBar, Toolbar, Typography, Button, Box,  } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import ClientOnly from '@/components/ClientOnly';

export function NavigationBar() {
  return (
    <ClientOnly>
      <NavigationBarContent />
    </ClientOnly>
  );
}

function NavigationBarContent() {
  const pathname = usePathname();
  const router = useRouter();



  const handleNavigation = (path: string) => {
    router.push(path);
  };


  const navItems = [
    { path: '/operations', label: 'Operations View' },
    { path: '/', label: 'Home' },
  ];


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
          Trade Processing System
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
              <Button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  color="inherit"
                  sx={{
                    backgroundColor: pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
              >
                {item.label}
              </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
} 