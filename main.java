import java.util.Scanner;

public class main {
    public static void triangle(int n) {
        for (int i = 0; i < n; i++) {
            char letter = 'A';
            for (int j = 0; j <= i; j++) {
                System.out.print((char) (letter + j));
            }
            System.out.println();
        }
    }

    public static void starTriangle(int n) {
        for (int i = 0; i < n; i++) {

            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void numberTriangle(int n) {
        for (int i = 0; i < n; i++) {

            for (int j = 0; j <= i; j++) {
                System.out.print(j + 1);
            }
            System.out.println();
        }
    }

    public static void number(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i);
            }
            System.out.println();
        }
    }

    public static void revrsestar(int n) {
        for (int i = n; i >= 0; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void reversenumber(int n) {
        for (int i = n; i >= 0; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void halfdiamond(int n) {
        for (int i = 1; i <= n; i++) {
            int spaces = 0;
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
                spaces++;
            }
            for (int j = 1; j <= n - spaces; j++) {
                System.out.print("*");
            }
            System.out.println();

        }
    }

    public static void starPyrmaid(int n) {

        for (int i = 1; i <= n; i++) {
            int spaces = 0;

            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
                spaces++;
            }

            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }

    public static void invertedstarPyrmaid(int n) {

        for (int i = 1; i <= n; i++) {
            int spaces = 0;

            for (int j = 1; j < i; j++) {
                System.out.print(" ");
                spaces++;
            }

            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }

    public static void diamond(int n) {

        for (int i = 1; i <= n; i++) {
            int spaces = 0;
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
                spaces++;
            }
            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = 1; i < n; i++) {
            int spaces = 0;
            for (int j = 1; j <= i; j++) {
                System.out.print(" ");
                spaces++;
            }
            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void hourglass(int n) {

        for (int i = 1; i <= n; i++) {
            int spaces = 0;
            for (int j = 1; j < i; j++) {
                System.out.print(" ");
                spaces++;
            }
            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = 1; i < n; i++) {
            int spaces = 0;
            for (int j = 1; j < n - i; j++) {
                System.out.print(" ");
                spaces++;
            }
            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }

    public static void hourglassletters(int n) {

        for (int i = 1; i <= n; i++) {
            int spaces = 0;
            for (int j = 1; j < i; j++) {
                System.out.print(" ");
                spaces++;
            }
            char letter = 'A';
            for (int j = 0; j < (2 * n - 1) - 2 * spaces; j++) {
                System.out.print((char) (letter + j));
            }
            System.out.println();
        }
        for (int i = 1; i < n; i++) {
            int spaces = 0;
            for (int j = 1; j < n - i; j++) {
                System.out.print(" ");
                spaces++;
            }
            char letter = 'A';
            for (int j = 0; j < (2 * n - 1) - 2 * spaces; j++) {
                System.out.print((char) (letter + j));
            }
            System.out.println();
        }

    }

    public static void hourglassnumbers(int n) {

        for (int i = 1; i <= n; i++) {
            int spaces = 0;
            for (int j = 1; j < i; j++) {
                System.out.print(" ");
                spaces++;
            }

            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
        for (int i = 1; i < n; i++) {
            int spaces = 0;
            for (int j = 1; j < n - i; j++) {
                System.out.print(" ");
                spaces++;
            }
            for (int j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
                System.out.print(j);
            }
            System.out.println();
        }

    }

    public static void floydtiraingle(int n) {
        int dig = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(dig++);
            }
            System.out.println();
        }
    }

    public static void zeroonetriangle(int n) {
        int flag = 1;
        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                flag = 0;
            } else {
                flag = 1;
            }
            for (int j = 1; j <= i; j++) {
                System.out.print(flag);
                if (flag == 1) {
                    flag = 0;
                } else {
                    flag = 1;
                }

            }
            System.out.println();
        }
    }

    public static void charPyramid(int n) {
        for (int i = 1; i <= n; i++) {
            int spaces = 0;
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
                spaces++;
            }
            char letter = 'A';
            for (int j = 0; j < (2 * n - 1) - 2 * spaces; j++) {
                System.out.print((char) (letter + j));
            }
            System.out.println();
        }
    }

    public static void hollowsquare(int n) {
        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= n; j++) {
                if ((i == 1 || i == n) || (j == 1 || j == n)) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void hollowpyramid(int n) {
        for (int i = 1; i <= n; i++) {
            int spaces = 0;
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
                spaces++;
            }

            int width = (2 * n - 1) - 2 * spaces;

            for (int j = 1; j <= width; j++) {
                if ((j == 1 || j == width) || (i == 1 || i == n)) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }

            System.out.println();
        }
    }

    public static void palindromicPyramid(int n) {
        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }

            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            for (int j = i - 1; j >= 1; j--) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        palindromicPyramid(n);

    }
}