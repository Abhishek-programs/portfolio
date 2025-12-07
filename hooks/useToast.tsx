import { useCallback } from 'react';

export type ToastType = 'success' | 'error';

export const useToast = () => {
  const showToast = useCallback(
    (message: string, type: ToastType = 'success') => {
      const toast = document.createElement('div');

      toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.5rem;">
            ${type === 'success' ? '✅' : '❌'}
          </span>
          <span style="font-size: 1rem; font-weight: 600;">${message}</span>
        </div>
      `;
      toast.className = `fixed top-6 right-6 z-50 px-6 py-4 rounded-lg font-bold shadow-lg transition-all duration-300 flex items-center gap-3 ${
        type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
      }`;

      toast.setAttribute('role', 'alert');
      toast.setAttribute('aria-live', 'assertive');

      toast.style.maxWidth = '320px';
      toast.style.pointerEvents = 'auto';
      toast.style.cursor = 'pointer';
      toast.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
      toast.style.fontSize = '1rem';
      toast.style.lineHeight = '1.4';
      toast.style.userSelect = 'none';

      document.body.appendChild(toast);

      let removed = false;

      const removeToast = () => {
        if (!removed && toast.parentNode) {
          toast.style.opacity = '0';
          setTimeout(() => {
            if (toast.parentNode) {
              toast.parentNode.removeChild(toast);
            }
          }, 400);
          removed = true;
        }
      };

      setTimeout(removeToast, 3000);

      toast.addEventListener('click', removeToast);

      return removeToast;
    },
    []
  );

  return { showToast };
};
