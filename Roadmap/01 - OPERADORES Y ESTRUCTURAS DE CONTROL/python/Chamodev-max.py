"""/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */"""

a = 5;
b = 2;

#ARITMETICOS
print (a + b); #suma
print (a - b); #reta
print (a * b); #multiplicacion
print (a / b); #division
print (a // b); #division con decimal
print (a % b); #modulo
print (a ** b); #exponente

#ASIGNACION
a += 18; #asignación a suma
print (a);
a -= 18; #asignación a resta
print (a);
a *= 18; #asignación a multiplicación
print (a);
a /= 18; #asignación a división
print (a);
a //= 18; #asignación a division con decimal
print (a);
a %= 18; #asignación a modulo
print (a);
a **= 18; #asignación a exponente
print (a);

#COMPARACION
print("¿10 == 3?", 10 == 3)
print("¿10 != 3?", 10 != 3)
print("¿10 > 3?", 10 > 3)
print("¿10 < 3?", 10 < 3)
print("¿10 >= 10?", 10 >= 10)
print("¿10 <= 9?", 10 <= 9)

#LOGICOS
a = True
b = False

print("a and b:", a and b)
print("a or b:", a or b)
print("not a:", not a)

#IDENTIDAD
x = [1, 2, 3]
y = x
z = [1, 2, 3]

print("x is y:", x is y)  # Mismo objeto
print("x is z:", x is z)  # Contenido igual, pero diferente objeto
print("x is not z:", x is not z)

#PERTENENCIA
lista = [1, 2, 3, 4]

print("2 in lista:", 2 in lista)
print("5 not in lista:", 5 not in lista)

#BITS
a = 5  # 0101
b = 3  # 0011

print("a & b:", a & b)    # 0001
print("a | b:", a | b)    # 0111
print("a ^ b:", a ^ b)    # 0110
print("~a:", ~a)          # Complemento
print("a << 1:", a << 1)  # 1010
print("a >> 1:", a >> 1)  # 0010

# Estrutura básica
# Condicional
edad = 18
if edad < 12:
    print("Crianza")
elif edad < 18:
    print("Adolescente")
else:
    print("Adulto")

#ITERATIVAS
contador = 0
while contador < 3:
    print("Contando:", contador)
    contador += 1

for i in range(3):
    print("Iteración con for:", i)

for i in range(5):
    if i == 3:
        continue
    if i == 4:
        break
    print("for con continue/break:", i)

#MANEJO DE EXCEPCIONES
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("¡Error! División por cero.")
finally:
    print("Bloque finally ejecutado.")

for i in range(10, 56):
    if (i % 2 == 0) and (i != 16) and (i % 3 != 0):
        print(i)
