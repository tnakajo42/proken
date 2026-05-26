const levelData = {
  1: {
    name: "レベル1",
    color: "#22c55e",
    topics: ["順次処理", "出力", "演算子", "変数", "if", "不等号"],
    time: 40,
    questions: [
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "console.log(100);",
        options: ["100", "\"100\"", "エラーになる", "何も出力されない"],
        answer: 0,
        explanation: "console.log() は引数の値を出力します。数値 100 がそのまま出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 7;\nconsole.log(x);",
        options: ["x", "7", "let x", "エラーになる"],
        answer: 1,
        explanation: "変数 x に 7 が代入されています。console.log(x) は変数の中身（7）を出力します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let a = 3;\nlet b = 5;\n\nconsole.log(a + b);",
        options: ["2", "35", "8", "15"],
        answer: 2,
        explanation: "a と b はどちらも数値なので、+ 演算子は加算を行います。3 + 5 = 8 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let a = 10;\nlet b = 3;\n\nconsole.log(a - b);",
        options: ["13", "103", "3", "7"],
        answer: 3,
        explanation: "- 演算子は減算です。10 - 3 = 7 になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 6;\nlet y = 4;\n\nconsole.log(x * y);",
        options: ["24", "10", "64", "2"],
        answer: 0,
        explanation: "* 演算子は掛け算（乗算）です。6 * 4 = 24 になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 20;\nlet y = 4;\n\nconsole.log(x / y);",
        options: ["80", "5", "24", "16"],
        answer: 1,
        explanation: "/ 演算子は割り算（除算）です。20 / 4 = 5 になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "console.log(1);\nconsole.log(2);\nconsole.log(3);",
        options: ["123", "1 2 3", "1\n2\n3", "6"],
        answer: 2,
        explanation: "console.log() は出力の後に自動で改行します。1, 2, 3 がそれぞれ別の行に表示されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 10;\nx = x - 3;\n\nconsole.log(x);",
        options: ["10", "3", "103", "7"],
        answer: 3,
        explanation: "x に 10 を代入した後、x - 3（= 7）を再び x に代入しています。最終的に x は 7 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 10;\n\nif (x > 5) {\n  console.log(\"OK\");\n}",
        options: ["OK", "NG", "何も出力されない", "エラーになる"],
        answer: 0,
        explanation: "x は 10 で、10 > 5 は true です。条件が true なので if ブロック内の処理が実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 3;\n\nif (x > 5) {\n  console.log(\"OK\");\n}",
        options: ["OK", "何も出力されない", "false", "エラーになる"],
        answer: 1,
        explanation: "x は 3 で、3 > 5 は false です。条件が false なので if ブロック内は実行されず、何も出力されません。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 8;\n\nif (x >= 5) {\n  console.log(\"A\");\n} else {\n  console.log(\"B\");\n}",
        options: ["B", "A\nB", "A", "何も出力されない"],
        answer: 2,
        explanation: "x は 8 で、8 >= 5 は true です。条件が true なので if ブロック（\"A\"）が実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 2;\n\nif (x >= 5) {\n  console.log(\"合格\");\n} else {\n  console.log(\"不合格\");\n}",
        options: ["合格", "合格\n不合格", "何も出力されない", "不合格"],
        answer: 3,
        explanation: "x は 2 で、2 >= 5 は false です。条件が false なので else ブロック（\"不合格\"）が実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let a = 5;\nlet b = 5;\n\nif (a === b) {\n  console.log(\"同じ\");\n} else {\n  console.log(\"違う\");\n}",
        options: ["同じ", "違う", "true", "エラーになる"],
        answer: 0,
        explanation: "=== は値が等しいかを比較します。5 === 5 は true なので \"同じ\" が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 3;\n\nif (x < 3) {\n  console.log(\"小さい\");\n} else {\n  console.log(\"以上\");\n}",
        options: ["小さい", "以上", "3", "何も出力されない"],
        answer: 1,
        explanation: "x は 3 で、3 < 3 は false です（3 は 3 より小さくない）。else ブロック（\"以上\"）が実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 75;\n\nif (x >= 80) {\n  console.log(\"A\");\n} else if (x >= 60) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}",
        options: ["A", "C", "B", "A\nB"],
        answer: 2,
        explanation: "x は 75 です。75 >= 80 は false、次の 75 >= 60 は true なので \"B\" が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 10;\nlet y = 3;\n\nconsole.log(x % y);",
        options: ["3", "3.33", "0", "1"],
        answer: 3,
        explanation: "% は剰余（余り）演算子です。10 ÷ 3 = 3 あまり 1 なので、結果は 1 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 2 + 3 * 4;\n\nconsole.log(x);",
        options: ["14", "20", "234", "24"],
        answer: 0,
        explanation: "算術演算は掛け算が先に計算されます。3 * 4 = 12、次に 2 + 12 = 14 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let a = 20;\nlet b = a / 4;\n\nconsole.log(b);",
        options: ["24", "5", "80", "16"],
        answer: 1,
        explanation: "a は 20 で、20 / 4 = 5 が b に代入されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 1;\nx = x + 1;\nx = x + 1;\n\nconsole.log(x);",
        options: ["1", "111", "3", "2"],
        answer: 2,
        explanation: "x は 1 → 2 → 3 と順番に加算されます。最終的に x は 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let age = 15;\n\nif (age <= 12) {\n  console.log(\"子供\");\n} else {\n  console.log(\"大人\");\n}",
        options: ["子供", "15", "何も出力されない", "大人"],
        answer: 3,
        explanation: "age は 15 で、15 <= 12 は false です。else ブロック（\"大人\"）が実行されます。"
      }
    ]
  },
  2: {
    name: "レベル2",
    color: "#3b82f6",
    topics: ["文字列連結", "不等価", "for", "論理演算子", "配列（宣言、取り出し、長さ）"],
    time: 40,
    questions: [
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let a = \"Hello\";\nlet b = \"World\";\n\nconsole.log(a + b);",
        options: ["HelloWorld", "Hello World", "Hello+World", "エラーになる"],
        answer: 0,
        explanation: "文字列同士の + は連結になります。間にスペースは入らず \"HelloWorld\" になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let name = \"太郎\";\n\nconsole.log(\"こんにちは\" + name);",
        options: ["こんにちはname", "こんにちは太郎", "こんにちは + 太郎", "エラーになる"],
        answer: 1,
        explanation: "文字列と変数を + で連結すると、変数の中身が結合されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = \"10\";\nlet y = 5;\n\nconsole.log(x + y);",
        options: ["15", "エラーになる", "105", "NaN"],
        answer: 2,
        explanation: "x は文字列の \"10\" なので、+ は文字列の連結として動作します。\"10\" + 5 → \"105\" になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 5;\n\nif (x !== 3) {\n  console.log(\"違う\");\n} else {\n  console.log(\"同じ\");\n}",
        options: ["同じ", "エラーになる", "何も出力されない", "違う"],
        answer: 3,
        explanation: "!== は「等しくない」を表します。5 !== 3 は true なので \"違う\" が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        options: ["0\n1\n2", "1\n2\n3", "0\n1\n2\n3", "3"],
        answer: 0,
        explanation: "i は 0 から始まり、i < 3 の間ループします。0, 1, 2 が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "for (let i = 1; i <= 4; i++) {\n  console.log(i);\n}",
        options: ["1\n2\n3", "1\n2\n3\n4", "0\n1\n2\n3\n4", "4"],
        answer: 1,
        explanation: "i は 1 から始まり、i <= 4 の間ループします。1, 2, 3, 4 が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 10;\n\nif (x > 5 && x < 20) {\n  console.log(\"OK\");\n} else {\n  console.log(\"NG\");\n}",
        options: ["NG", "true", "OK", "エラーになる"],
        answer: 2,
        explanation: "&& は「かつ」を表します。10 > 5 も 10 < 20 も true なので、全体が true になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 3;\n\nif (x === 1 || x === 3) {\n  console.log(\"当たり\");\n} else {\n  console.log(\"はずれ\");\n}",
        options: ["はずれ", "エラーになる", "false", "当たり"],
        answer: 3,
        explanation: "|| は「または」を表します。x === 3 が true なので、全体が true になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [10, 20, 30];\n\nconsole.log(arr[1]);",
        options: ["20", "10", "30", "1"],
        answer: 0,
        explanation: "配列のインデックスは 0 から始まります。arr[1] は 2 番目の要素（20）です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let colors = [\"赤\", \"青\", \"緑\", \"黄\"];\n\nconsole.log(colors.length);",
        options: ["3", "4", "黄", "5"],
        answer: 1,
        explanation: ".length は配列の要素数を返します。4 つの要素があるので 4 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let fruits = [\"りんご\", \"みかん\", \"ぶどう\"];\n\nconsole.log(fruits[0]);",
        options: ["みかん", "ぶどう", "りんご", "0"],
        answer: 2,
        explanation: "fruits[0] は配列の最初の要素（インデックス 0）、つまり \"りんご\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let sum = 0;\n\nfor (let i = 1; i <= 3; i++) {\n  sum = sum + i;\n}\n\nconsole.log(sum);",
        options: ["3", "0", "123", "6"],
        answer: 3,
        explanation: "sum に 1 + 2 + 3 を順番に加算します。0+1+2+3 = 6 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let a = 10;\nlet b = 10;\n\nif (a !== b) {\n  console.log(\"異なる\");\n} else {\n  console.log(\"等しい\");\n}",
        options: ["等しい", "異なる", "true", "何も出力されない"],
        answer: 0,
        explanation: "a と b は同じ値（10）なので、a !== b は false です。else ブロック（\"等しい\"）が実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let result = \"\";\n\nfor (let i = 1; i <= 3; i++) {\n  result = result + i;\n}\n\nconsole.log(result);",
        options: ["6", "123", "321", "3"],
        answer: 1,
        explanation: "result は文字列なので、+ は連結になります。\"\" + 1 + 2 + 3 → \"123\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 3;\n\nif (x > 5 && x < 10) {\n  console.log(\"範囲内\");\n} else {\n  console.log(\"範囲外\");\n}",
        options: ["範囲内", "true", "範囲外", "何も出力されない"],
        answer: 2,
        explanation: "3 > 5 は false です。&& は片方でも false なら全体が false になるので、\"範囲外\" が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = true;\n\nconsole.log(!x);",
        options: ["true", "x", "エラーになる", "false"],
        answer: 3,
        explanation: "! は論理否定演算子です。true の否定は false になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [5, 10, 15, 20];\n\nconsole.log(arr[3]);",
        options: ["20", "15", "3", "エラーになる"],
        answer: 0,
        explanation: "arr[3] はインデックス 3（4 番目）の要素です。arr[3] = 20 です。"
      },
      {
        question: "「Hello World」と出力されるプログラムを選択しなさい",
        options: [
          { code: "let a = \"Hello\";\nlet b = \"World\";\n\nconsole.log(a + b);" },
          { code: "let a = \"Hello\";\nlet b = \"World\";\n\nconsole.log(a + \" \" + b);" },
          { code: "let a = \"Hello\";\nlet b = \"World\";\n\nconsole.log(a - b);" },
          { code: "let a = \"Hello\";\nlet b = \"World\";\n\nconsole.log(\"a\" + \" \" + \"b\");" }
        ],
        answer: 1,
        explanation: "間にスペース \" \" を挟んで連結することで \"Hello World\" になります。選択肢1はスペースなし、選択肢4は変数名が文字列になっています。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let count = 0;\n\nfor (let i = 0; i < 5; i++) {\n  count++;\n}\n\nconsole.log(count);",
        options: ["4", "0", "5", "10"],
        answer: 2,
        explanation: "ループは 5 回（i = 0, 1, 2, 3, 4）実行されます。count++ も 5 回実行されるので count は 5 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [10, 20, 30];\n\nconsole.log(arr[arr.length - 1]);",
        options: ["10", "20", "2", "30"],
        answer: 3,
        explanation: "arr.length は 3 なので、arr[3 - 1] = arr[2] = 30 です。配列の最後の要素を取得する定番の方法です。"
      }
    ]
  },
  3: {
    name: "レベル3",
    color: "#8b5cf6",
    topics: ["変数の型（Number, String, Boolean）", "乱数", "関数", "for（配列処理）"],
    time: 40,
    questions: [
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 42;\n\nconsole.log(typeof x);",
        options: ["number", "int", "42", "string"],
        answer: 0,
        explanation: "typeof は値の型を文字列で返します。数値の型は \"number\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = \"hello\";\n\nconsole.log(typeof x);",
        options: ["text", "string", "hello", "String"],
        answer: 1,
        explanation: "typeof で文字列の型を調べると \"string\"（小文字）が返されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = true;\n\nconsole.log(typeof x);",
        options: ["true", "string", "boolean", "bool"],
        answer: 2,
        explanation: "true / false の型は \"boolean\" です。\"bool\" ではないので注意しましょう。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "function hello() {\n  console.log(\"Hi\");\n}\n\nhello();",
        options: ["hello", "function", "エラーになる", "Hi"],
        answer: 3,
        explanation: "関数 hello を呼び出すと、中の console.log(\"Hi\") が実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(3, 4));",
        options: ["7", "34", "add(3, 4)", "エラーになる"],
        answer: 0,
        explanation: "関数 add は a + b を返します。add(3, 4) は 3 + 4 = 7 を返します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "function double(x) {\n  return x * 2;\n}\n\nconsole.log(double(5));",
        options: ["5", "10", "52", "x * 2"],
        answer: 1,
        explanation: "double(5) は 5 * 2 = 10 を返します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [1, 2, 3];\n\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}",
        options: ["0\n1\n2", "1 2 3", "1\n2\n3", "3"],
        answer: 2,
        explanation: "for ループで配列の各要素（arr[0]=1, arr[1]=2, arr[2]=3）を順に出力します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [10, 20, 30];\nlet sum = 0;\n\nfor (let i = 0; i < arr.length; i++) {\n  sum = sum + arr[i];\n}\n\nconsole.log(sum);",
        options: ["30", "3", "102030", "60"],
        answer: 3,
        explanation: "配列の全要素を合計します。10 + 20 + 30 = 60 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "console.log(Math.floor(3.7));",
        options: ["3", "4", "3.7", "エラーになる"],
        answer: 0,
        explanation: "Math.floor() は小数点以下を切り捨てます。3.7 → 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "console.log(Math.floor(7.2));",
        options: ["8", "7", "7.2", "72"],
        answer: 1,
        explanation: "Math.floor() は小数点以下を切り捨てます。7.2 → 7 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = Math.floor(10 / 3);\n\nconsole.log(x);",
        options: ["3.33", "10", "3", "4"],
        answer: 2,
        explanation: "10 / 3 = 3.333... を Math.floor() で切り捨てて 3 になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "function greet(name) {\n  return \"Hello \" + name;\n}\n\nconsole.log(greet(\"太郎\"));",
        options: ["greet(太郎)", "Hello name", "エラーになる", "Hello 太郎"],
        answer: 3,
        explanation: "引数 name に \"太郎\" が渡され、\"Hello \" + \"太郎\" = \"Hello 太郎\" が返されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [3, 7, 2, 9, 4];\nlet max = arr[0];\n\nfor (let i = 1; i < arr.length; i++) {\n  if (arr[i] > max) {\n    max = arr[i];\n  }\n}\n\nconsole.log(max);",
        options: ["9", "3", "4", "7"],
        answer: 0,
        explanation: "配列の最大値を探すプログラムです。3, 7, 2, 9, 4 の中で最大は 9 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = Number(\"5\");\nlet y = 3;\n\nconsole.log(x + y);",
        options: ["53", "8", "エラーになる", "NaN"],
        answer: 1,
        explanation: "Number(\"5\") は文字列 \"5\" を数値 5 に変換します。5 + 3 = 8 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "function square(x) {\n  return x * x;\n}\n\nconsole.log(square(3) + square(4));",
        options: ["7", "12", "25", "34"],
        answer: 2,
        explanation: "square(3) = 9、square(4) = 16。9 + 16 = 25 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [\"a\", \"b\", \"c\"];\nlet result = \"\";\n\nfor (let i = 0; i < arr.length; i++) {\n  result = result + arr[i];\n}\n\nconsole.log(result);",
        options: ["a b c", "a\nb\nc", "012", "abc"],
        answer: 3,
        explanation: "配列の各要素を文字列として連結します。\"\" + \"a\" + \"b\" + \"c\" = \"abc\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "console.log(typeof (3 > 1));",
        options: ["boolean", "true", "number", "string"],
        answer: 0,
        explanation: "3 > 1 は true です。true の型は \"boolean\" です。"
      },
      {
        question: "0から9までの整数の乱数を生成するプログラムを選択しなさい",
        options: [
          { code: "Math.floor(Math.random() * 100);" },
          { code: "Math.floor(Math.random() * 10);" },
          { code: "Math.random() * 10;" },
          { code: "Math.floor(Math.random() * 9);" }
        ],
        answer: 1,
        explanation: "Math.random() は 0以上1未満の乱数を返します。* 10 で 0以上10未満に、Math.floor() で整数にすると 0〜9 になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "function isEven(n) {\n  if (n % 2 === 0) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nconsole.log(isEven(4));",
        options: ["false", "0", "true", "4"],
        answer: 2,
        explanation: "4 % 2 = 0 なので条件は true です。return true が実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [1, 2, 3];\n\nfor (let i = arr.length - 1; i >= 0; i--) {\n  console.log(arr[i]);\n}",
        options: ["1\n2\n3", "3\n2\n1\n0", "2\n1\n0", "3\n2\n1"],
        answer: 3,
        explanation: "i を配列の末尾（2）から 0 まで逆順にループし、arr[2]=3, arr[1]=2, arr[0]=1 を出力します。"
      }
    ]
  },
  4: {
    name: "レベル4",
    color: "#f59e0b",
    topics: ["switch", "配列操作（追加、削除、参照）", "定数", "while", "ループの中断/継続"],
    time: 40,
    questions: [
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 2;\n\nswitch (x) {\n  case 1:\n    console.log(\"A\");\n    break;\n  case 2:\n    console.log(\"B\");\n    break;\n  case 3:\n    console.log(\"C\");\n    break;\n}",
        options: ["B", "A", "C", "何も出力されない"],
        answer: 0,
        explanation: "x は 2 なので case 2 に一致し、\"B\" が出力されます。break でswitch文を抜けます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 5;\n\nswitch (x) {\n  case 1:\n    console.log(\"A\");\n    break;\n  case 2:\n    console.log(\"B\");\n    break;\n  default:\n    console.log(\"other\");\n}",
        options: ["A", "other", "B", "何も出力されない"],
        answer: 1,
        explanation: "x は 5 でどの case にも一致しないので、default ブロックが実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [1, 2, 3];\narr.push(4);\n\nconsole.log(arr.length);",
        options: ["3", "1", "4", "5"],
        answer: 2,
        explanation: "push() は配列の末尾に要素を追加します。元の3要素 + 1 = 4 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [10, 20, 30];\nlet x = arr.pop();\n\nconsole.log(x);",
        options: ["10", "20", "3", "30"],
        answer: 3,
        explanation: "pop() は配列の末尾の要素を取り出して返します。末尾は 30 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "const x = 10;\n\nconsole.log(x);",
        options: ["10", "const x", "エラーになる", "x"],
        answer: 0,
        explanation: "const は定数（再代入不可の変数）を宣言します。値の参照は通常の変数と同じです。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "const x = 5;\nx = 10;\n\nconsole.log(x);",
        options: ["5", "エラーになる", "10", "15"],
        answer: 1,
        explanation: "const で宣言した変数は再代入できません。x = 10 でエラーが発生します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let i = 0;\n\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}",
        options: ["1\n2\n3", "0\n1\n2\n3", "0\n1\n2", "3"],
        answer: 2,
        explanation: "i は 0 から始まり、i < 3 の間ループします。0, 1, 2 が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "for (let i = 0; i < 5; i++) {\n  if (i === 3) {\n    break;\n  }\n  console.log(i);\n}",
        options: ["0\n1\n2\n3\n4", "0\n1\n2\n3", "3", "0\n1\n2"],
        answer: 3,
        explanation: "i が 3 のとき break でループを抜けます。3 の出力前に抜けるので 0, 1, 2 だけ出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "for (let i = 0; i < 5; i++) {\n  if (i === 2) {\n    continue;\n  }\n  console.log(i);\n}",
        options: ["0\n1\n3\n4", "0\n1\n2\n3\n4", "2", "0\n1"],
        answer: 0,
        explanation: "i が 2 のとき continue で以降の処理をスキップし次のループへ。2 だけ出力されません。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [];\narr.push(\"a\");\narr.push(\"b\");\narr.push(\"c\");\n\nconsole.log(arr[1]);",
        options: ["a", "b", "c", "1"],
        answer: 1,
        explanation: "push で順に追加すると arr = [\"a\", \"b\", \"c\"]。arr[1] は \"b\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [10, 20, 30];\nlet x = arr.shift();\n\nconsole.log(x);",
        options: ["20", "30", "10", "3"],
        answer: 2,
        explanation: "shift() は配列の先頭の要素を取り出して返します。先頭は 10 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let i = 3;\n\nwhile (i > 0) {\n  console.log(i);\n  i--;\n}",
        options: ["0\n1\n2\n3", "1\n2\n3", "0", "3\n2\n1"],
        answer: 3,
        explanation: "i は 3 から始まり、i > 0 の間ループします。3, 2, 1 が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 1;\n\nswitch (x) {\n  case 1:\n    console.log(\"A\");\n  case 2:\n    console.log(\"B\");\n    break;\n  case 3:\n    console.log(\"C\");\n}",
        options: ["A\nB", "A", "B", "A\nB\nC"],
        answer: 0,
        explanation: "case 1 に break がないので、case 2 のコードまで「フォールスルー」します。A と B が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [\"a\", \"b\", \"c\", \"d\"];\narr.splice(1, 1);\n\nconsole.log(arr.length);",
        options: ["4", "3", "1", "2"],
        answer: 1,
        explanation: "splice(1, 1) はインデックス 1 から 1 個の要素を削除します。4 - 1 = 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = 1;\n\nwhile (x < 10) {\n  x = x * 2;\n}\n\nconsole.log(x);",
        options: ["8", "10", "16", "32"],
        answer: 2,
        explanation: "x: 1→2→4→8→16。x=16 のとき 16 < 10 が false になりループ終了。16 が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [2, 3];\narr.unshift(1);\n\nconsole.log(arr[0]);",
        options: ["2", "3", "エラーになる", "1"],
        answer: 3,
        explanation: "unshift() は配列の先頭に要素を追加します。arr = [1, 2, 3] になり、arr[0] は 1 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let i = 0;\n\nwhile (true) {\n  if (i >= 3) {\n    break;\n  }\n  i++;\n}\n\nconsole.log(i);",
        options: ["3", "エラーになる", "true", "0"],
        answer: 0,
        explanation: "while(true) は無限ループですが、i が 3 以上になると break で抜けます。i は 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [1, 3, 4];\narr.splice(1, 0, 2);\n\nconsole.log(arr[1]);",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "splice(1, 0, 2) はインデックス 1 に要素 2 を挿入します。arr = [1, 2, 3, 4] になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let i = 0;\nlet sum = 0;\n\nwhile (i < 5) {\n  i++;\n  if (i % 2 === 0) {\n    continue;\n  }\n  sum = sum + i;\n}\n\nconsole.log(sum);",
        options: ["6", "15", "9", "10"],
        answer: 2,
        explanation: "偶数のとき continue でスキップ。奇数（1, 3, 5）だけ加算されます。1+3+5 = 9 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let color = \"赤\";\n\nswitch (color) {\n  case \"赤\":\n    console.log(\"Red\");\n    break;\n  case \"青\":\n    console.log(\"Blue\");\n    break;\n  default:\n    console.log(\"Other\");\n}",
        options: ["Other", "Blue", "赤", "Red"],
        answer: 3,
        explanation: "color は \"赤\" で case \"赤\" に一致するので \"Red\" が出力されます。"
      }
    ]
  },
  5: {
    name: "レベル5",
    color: "#ef4444",
    topics: ["変数の型（null、型の確認）", "配列操作（挿入、入れ替え、並べ替え）", "二次元配列", "例外処理"],
    time: 40,
    questions: [
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = null;\n\nconsole.log(x);",
        options: ["null", "undefined", "0", "エラーになる"],
        answer: 0,
        explanation: "null は「値がない」ことを明示的に表す特殊な値です。そのまま null と出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "console.log(typeof null);",
        options: ["null", "object", "undefined", "boolean"],
        answer: 1,
        explanation: "typeof null は \"object\" を返します。これは JavaScript の歴史的な仕様上の特徴です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x;\n\nconsole.log(x);",
        options: ["null", "0", "undefined", "エラーになる"],
        answer: 2,
        explanation: "変数を宣言しただけで値を代入していないと、undefined（未定義）になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [3, 1, 4, 1, 5];\narr.sort();\n\nconsole.log(arr[0]);",
        options: ["3", "5", "4", "1"],
        answer: 3,
        explanation: "sort() は配列を昇順に並べ替えます。[1, 1, 3, 4, 5] の先頭は 1 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [1, 2, 3];\narr.reverse();\n\nconsole.log(arr[0]);",
        options: ["3", "1", "2", "エラーになる"],
        answer: 0,
        explanation: "reverse() は配列を反転します。[3, 2, 1] の先頭は 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let grid = [[1, 2], [3, 4], [5, 6]];\n\nconsole.log(grid[1][0]);",
        options: ["1", "3", "2", "4"],
        answer: 1,
        explanation: "grid[1] は [3, 4]、その [0] は 3 です。二次元配列は [行][列] でアクセスします。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "try {\n  console.log(\"A\");\n} catch (e) {\n  console.log(\"B\");\n}",
        options: ["B", "A\nB", "A", "エラーになる"],
        answer: 2,
        explanation: "try ブロック内でエラーが発生しなければ、catch は実行されません。\"A\" だけ出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "try {\n  let x = y + 1;\n  console.log(x);\n} catch (e) {\n  console.log(\"エラー\");\n}",
        options: ["1", "undefined", "y + 1", "エラー"],
        answer: 3,
        explanation: "y は宣言されていないのでエラーが発生し、catch ブロックの \"エラー\" が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [1, 2, 4, 5];\narr.splice(2, 0, 3);\n\nconsole.log(arr[2]);",
        options: ["3", "4", "2", "5"],
        answer: 0,
        explanation: "splice(2, 0, 3) はインデックス 2 に 3 を挿入します。arr = [1, 2, 3, 4, 5] です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [10, 20, 30];\nlet temp = arr[0];\narr[0] = arr[2];\narr[2] = temp;\n\nconsole.log(arr[0]);",
        options: ["10", "30", "20", "temp"],
        answer: 1,
        explanation: "temp を使って arr[0] と arr[2] を入れ替えます。arr = [30, 20, 10] で arr[0] は 30 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = \"hello\";\n\nif (typeof x === \"string\") {\n  console.log(\"文字列\");\n} else {\n  console.log(\"文字列ではない\");\n}",
        options: ["文字列ではない", "hello", "文字列", "string"],
        answer: 2,
        explanation: "typeof x は \"string\" なので条件は true。\"文字列\" が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let matrix = [[1, 2, 3], [4, 5, 6]];\n\nconsole.log(matrix[1][2]);",
        options: ["2", "5", "3", "6"],
        answer: 3,
        explanation: "matrix[1] は [4, 5, 6]、その [2] は 6 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x = null;\n\nif (x === null) {\n  console.log(\"null です\");\n} else {\n  console.log(\"null ではない\");\n}",
        options: ["null です", "null ではない", "エラーになる", "undefined"],
        answer: 0,
        explanation: "x === null は true なので \"null です\" が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [\"banana\", \"apple\", \"cherry\"];\narr.sort();\n\nconsole.log(arr[0]);",
        options: ["banana", "apple", "cherry", "エラーになる"],
        answer: 1,
        explanation: "sort() は文字列をアルファベット順に並べ替えます。先頭は \"apple\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "try {\n  console.log(\"A\");\n} catch (e) {\n  console.log(\"B\");\n} finally {\n  console.log(\"C\");\n}",
        options: ["A", "B\nC", "A\nC", "A\nB\nC"],
        answer: 2,
        explanation: "エラーなしなので try（A）と finally（C）が実行されます。finally は常に実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let grid = [[1, 2], [3, 4], [5, 6]];\n\nconsole.log(grid.length);",
        options: ["2", "6", "4", "3"],
        answer: 3,
        explanation: "grid は 3 つの配列を含む配列です。外側の要素数は 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [1, 2, 3, 4];\narr.splice(1, 2, 20, 30);\n\nconsole.log(arr[2]);",
        options: ["30", "3", "20", "4"],
        answer: 0,
        explanation: "splice(1, 2, 20, 30) はインデックス 1 から 2 個削除し、20 と 30 を挿入。arr = [1, 20, 30, 4] です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let x;\n\nconsole.log(typeof x);",
        options: ["null", "undefined", "number", "エラーになる"],
        answer: 1,
        explanation: "値が代入されていない変数の typeof は \"undefined\" を返します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let arr = [\"a\", \"b\", \"c\", \"d\"];\narr.reverse();\n\nconsole.log(arr[1]);",
        options: ["b", "a", "c", "d"],
        answer: 2,
        explanation: "reverse() で [\"d\", \"c\", \"b\", \"a\"] になります。arr[1] は \"c\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "try {\n  null.toString();\n} catch (e) {\n  console.log(\"caught\");\n}\n\nconsole.log(\"done\");",
        options: ["caught", "done", "エラーになる", "caught\ndone"],
        answer: 3,
        explanation: "null.toString() でエラーが発生し catch が実行。その後 try-catch の外の console.log も実行されます。"
      }
    ]
  },
  6: {
    name: "レベル6",
    color: "#6366f1",
    topics: ["連想配列（オブジェクト）", "クラス"],
    time: 40,
    questions: [
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { name: \"太郎\", age: 20 };\n\nconsole.log(obj.name);",
        options: ["太郎", "name", "20", "エラーになる"],
        answer: 0,
        explanation: "obj.name でオブジェクトの name プロパティの値 \"太郎\" にアクセスします。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { color: \"赤\", size: \"大\" };\n\nconsole.log(obj[\"size\"]);",
        options: ["color", "大", "size", "赤"],
        answer: 1,
        explanation: "obj[\"size\"] はブラケット記法でプロパティにアクセスします。値は \"大\" です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { a: 1, b: 2, c: 3 };\n\nconsole.log(Object.keys(obj).length);",
        options: ["1", "6", "3", "2"],
        answer: 2,
        explanation: "Object.keys() はプロパティ名の配列を返します。[\"a\", \"b\", \"c\"] で長さは 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { x: 10 };\nobj.y = 20;\n\nconsole.log(obj.y);",
        options: ["10", "undefined", "エラーになる", "20"],
        answer: 3,
        explanation: "オブジェクトには後からプロパティを追加できます。obj.y = 20 で追加し、20 が出力されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nlet dog = new Dog(\"ポチ\");\nconsole.log(dog.name);",
        options: ["ポチ", "Dog", "name", "undefined"],
        answer: 0,
        explanation: "new Dog(\"ポチ\") で constructor が呼ばれ、this.name に \"ポチ\" が設定されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n  add() {\n    this.count++;\n  }\n}\n\nlet c = new Counter();\nc.add();\nc.add();\nconsole.log(c.count);",
        options: ["0", "2", "1", "エラーになる"],
        answer: 1,
        explanation: "add() を 2 回呼ぶと count が 0→1→2 になります。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { a: 10, b: 20, c: 30 };\nlet vals = Object.values(obj);\n\nconsole.log(vals[1]);",
        options: ["10", "b", "20", "30"],
        answer: 2,
        explanation: "Object.values() はプロパティの値の配列 [10, 20, 30] を返します。インデックス 1 は 20 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class Calc {\n  constructor(x) {\n    this.x = x;\n  }\n  double() {\n    return this.x * 2;\n  }\n}\n\nlet c = new Calc(5);\nconsole.log(c.double());",
        options: ["5", "Calc", "x * 2", "10"],
        answer: 3,
        explanation: "Calc(5) で this.x = 5 が設定され、double() は 5 * 2 = 10 を返します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { name: \"太郎\", age: 20 };\n\nconsole.log(\"name\" in obj);",
        options: ["true", "false", "太郎", "エラーになる"],
        answer: 0,
        explanation: "in 演算子はプロパティの存在を確認します。\"name\" は obj に存在するので true です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { a: 1, b: 2, c: 3 };\ndelete obj.b;\n\nconsole.log(Object.keys(obj).length);",
        options: ["3", "2", "1", "エラーになる"],
        answer: 1,
        explanation: "delete で b プロパティを削除。残りは a と c の 2 つです。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class Animal {\n  speak() {\n    return \"...\";\n  }\n}\n\nclass Cat extends Animal {\n  speak() {\n    return \"ニャー\";\n  }\n}\n\nlet cat = new Cat();\nconsole.log(cat.speak());",
        options: ["...", "Animal", "ニャー", "エラーになる"],
        answer: 2,
        explanation: "Cat は Animal を継承し speak() をオーバーライドしています。Cat のメソッドが実行されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { x: 1, y: 2, z: 3 };\nlet sum = 0;\n\nfor (let key in obj) {\n  sum = sum + obj[key];\n}\n\nconsole.log(sum);",
        options: ["3", "xyz", "123", "6"],
        answer: 3,
        explanation: "for...in でオブジェクトの各プロパティの値を合計します。1 + 2 + 3 = 6 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nlet p = new Point(3, 4);\nconsole.log(p.x + p.y);",
        options: ["7", "34", "Point", "エラーになる"],
        answer: 0,
        explanation: "p.x = 3、p.y = 4 で、3 + 4 = 7 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let key = \"color\";\nlet obj = {};\nobj[key] = \"赤\";\n\nconsole.log(obj.color);",
        options: ["key", "赤", "undefined", "エラーになる"],
        answer: 1,
        explanation: "obj[key] は obj[\"color\"] と同じです。obj.color = \"赤\" が設定されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class MyMath {\n  square(x) {\n    return x * x;\n  }\n}\n\nlet m = new MyMath();\nconsole.log(m.square(4));",
        options: ["4", "8", "16", "エラーになる"],
        answer: 2,
        explanation: "square(4) は 4 * 4 = 16 を返します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let scores = { 国語: 80, 数学: 90, 英語: 70 };\nlet vals = Object.values(scores);\n\nconsole.log(vals.length);",
        options: ["80", "240", "国語", "3"],
        answer: 3,
        explanation: "Object.values() は値の配列 [80, 90, 70] を返します。長さは 3 です。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name) {\n    super(name);\n  }\n  bark() {\n    return this.name + \"はワン！\";\n  }\n}\n\nlet d = new Dog(\"ポチ\");\nconsole.log(d.bark());",
        options: ["ポチはワン！", "ワン！", "undefined", "エラーになる"],
        answer: 0,
        explanation: "super(name) で親クラスの constructor を呼び、this.name = \"ポチ\" が設定されます。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { a: 1, b: undefined };\n\nconsole.log(\"b\" in obj);",
        options: ["false", "true", "undefined", "エラーになる"],
        answer: 1,
        explanation: "in は値が undefined でもプロパティが存在すれば true を返します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  info() {\n    return this.name + \"(\" + this.age + \"歳)\";\n  }\n}\n\nlet p = new Person(\"太郎\", 20);\nconsole.log(p.info());",
        options: ["太郎", "20歳", "太郎(20歳)", "Person"],
        answer: 2,
        explanation: "info() は name と age を組み合わせた文字列 \"太郎(20歳)\" を返します。"
      },
      {
        question: "次のプログラムの実行結果を選びなさい",
        code: "let obj = { name: \"太郎\", age: 20 };\nlet keys = [];\n\nfor (let k in obj) {\n  keys.push(k);\n}\n\nconsole.log(keys[0]);",
        options: ["太郎", "obj", "0", "name"],
        answer: 3,
        explanation: "for...in はプロパティ名（キー）を取得します。最初のキーは \"name\" です。"
      }
    ]
  }
};
