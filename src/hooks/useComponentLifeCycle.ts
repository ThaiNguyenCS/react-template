import { useEffect } from 'react';

export const useComponentLifecycle = (
  componentName: string,
  metadata?: Record<string, unknown>
) => {
  useEffect(() => {
    console.log(
      `%c🟢 [Mounted] ${componentName}`,
      'color: #22c55e; font-weight: bold;',
      metadata ?? ''
    );

    return () => {
      console.log(
        `%c🔴 [Unmounted] ${componentName}`,
        'color: #ef4444; font-weight: bold;',
        metadata ?? ''
      );
    };
  }, []); // Run only on mount and unmount
};