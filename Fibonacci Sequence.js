def fibonacci(n):
    if n == 1 or n == 2:
        return 1
    a, b = 1, 1
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b

# Example usage:
print(fibonacci(43))  # Should return 433494437
print(fibonacci(101))  # Should return 573147844013817084101
print(fibonacci(227))  # Should return a very large number
print(fibonacci(491))  # Should return a very very large number
print(fibonacci(881))  # Should return an extremely large number
