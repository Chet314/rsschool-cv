## Viacheslav Apalkov

[GitHub](https://github.com/Chet314/)

### About Me

- I used to be a successful chemical engineer. I had been producing different compound matirials
until one day I realized that I wanted somthing else in this life
- I studied Java because I wanted to know how the internet works
- I studied HTML, CSS, JS, React to be able to create websites

### A bit of a beautiful code

```markdown
static BigInteger ProdTree(int l, int r)
{
    if (l > r)
        return 1;
    if (l == r)
         return l;
    if (r - l == 1)
        return (BigInteger)l * r;
    int m = (l + r) / 2;
    return ProdTree(l, m) * ProdTree(m + 1, r);
}
        
static BigInteger FactTree(int n)
{
    if (n < 0)
        return 0;
    if (n == 0)
        return 1;
    if (n == 1 || n == 2)
        return n;
    return ProdTree(2, n);
}   
```
### Experience
- [Portfolio for my friend photographer](https://chet314.github.io/portfolio/) 
- Chemical engineer 

