use std::io;

fn leer_numero(mensaje: &str) -> f64 {
    loop {
        println!("{}", mensaje);
        let mut entrada = String::new();
        io::stdin().read_line(&mut entrada).expect("Error");
        match entrada.trim().parse::<f64>() {
            Ok(n) => return n,
            Err(_) => println!("Eso no es un número. Intenta de nuevo."),
        }
    }
}

fn calcular(a: f64, op: &str, b: f64) {
    match op {
        "+" => println!("= {}", a + b),
        "-" => println!("= {}", a - b),
        "*" => println!("= {}", a * b),
        "/" => {
            if b == 0.0 {
                println!("Error: no se puede dividir entre cero");
            } else {
                println!("= {}", a / b);
            }
        }
        _ => println!("Operación desconocida. Usa: + - * /"),
    }
}

fn main() {
    println!("=== Calculadora en Rust ===");
    println!("Escribe 'salir' como operación para terminar.");

    loop {
        println!("");
        let a = leer_numero("Primer número:");

        println!("Operación (+ - * /):");
        let mut op = String::new();
        io::stdin().read_line(&mut op).expect("Error");
        let op = op.trim();

        if op == "salir" {
            println!("¡Hasta luego!");
            break;
        }

        let b = leer_numero("Segundo número:");
        calcular(a, op, b);
    }
}
