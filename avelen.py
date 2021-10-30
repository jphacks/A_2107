import random 
sum=[]
for i in range(1008):
    a=[random.randint(-4,4),random.randint(-4,4),random.randint(-4,4)]
    b=[random.randint(-4,4),random.randint(-4,4),random.randint(-4,4)]
    d=(a[0]-b[0])**2+(a[1]-b[1])**2+(a[2]-b[2])**2
    # d=d**(1/2)
    sum.append(d)

sum.sort()
print(sum[100],sum[201],sum[302],sum[403],sum[504],sum[605],sum[706],sum[807],sum[908])