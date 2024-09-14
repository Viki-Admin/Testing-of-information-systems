import unittest

class Calculator:
    def add(self, a, b):
        """Возвращает сумму двух чисел."""
        return a + b

    def subtract(self, a, b):
        """Возвращает разность двух чисел."""
        return a - b

    def multiply(self, a, b):
        """Возвращает произведение двух чисел."""
        return a * b

    def divide(self, a, b):
        """Возвращает частное двух чисел."""
        if b == 0:
            raise ValueError("Деление на ноль недопустимо.")
        return a / b

class TestCalculator(unittest.TestCase):
    def setUp(self):
        self.calc = Calculator()

    def test_add(self):
        self.assertEqual(self.calc.add(1, 2), 3)
        self.assertEqual(self.calc.add(-1, 1), 0)
        self.assertEqual(self.calc.add(-1, -1), -2)

    def test_subtract(self):
        self.assertEqual(self.calc.subtract(10, 5), 5)
        self.assertEqual(self.calc.subtract(-1, -1), 0)
        self.assertEqual(self.calc.subtract(-5, -3), -2)

    def test_multiply(self):
        self.assertEqual(self.calc.multiply(3, 7), 21)
        self.assertEqual(self.calc.multiply(-1, 1), -1)
        self.assertEqual(self.calc.multiply(0, 10), 0)

    def test_divide(self):
        self.assertEqual(self.calc.divide(10, 2), 5)
        self.assertEqual(self.calc.divide(-9, 3), -3)
        self.assertEqual(self.calc.divide(0, 1), 0)
        
        with self.assertRaises(ValueError):
            self.calc.divide(1, 0)

if __name__ == '__main__':
    unittest.main()
