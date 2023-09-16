#creating a rockyou.txt password file to use with your aircrack-ng or wifite
import random
import string

def generate_passwords(file_path, num_passwords):
    with open(file_path, 'a') as f:
        for _ in range(num_passwords):
            password = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))
            f.write(password + '\n')

file_path = 'rockyou.txt'
num_passwords = 10000000

generate_passwords(file_path, num_passwords)
