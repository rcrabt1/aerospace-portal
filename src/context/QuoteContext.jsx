import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = useCallback((part) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === part.id);
      if (existing) {
        return prev.map((item) =>
          item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: part.id, name: part.name, price: part.price, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  }, []);

  const clearItems = useCallback(() => setItems([]), []);

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQuantity, clearItems, itemCount }),
    [items, addItem, removeItem, updateQuantity, clearItems, itemCount]
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) throw new Error('useQuote must be used within a QuoteProvider');
  return context;
}
