// quiz-questions.js

const allData = {
  beginner: [
    {
      q: "Which of these is a safe place to keep your money?",
      options: ["Bank account", "Backpack", "Under your bed", "With a friend"],
      answer: 0,
      feedback: "Keeping your money in a bank account is safer than leaving it in risky places."
    },
    {
      q: "What should you do before buying something expensive?",
      options: ["Compare prices and think about it", "Buy it immediately", "Ask a friend", "Wait until it’s gone"],
      answer: 0,
      feedback: "Smart buyers compare prices before big purchases."
    },
    {
      q: "What happens if you spend more than you earn?",
      options: ["You go into debt", "You become rich", "You save money", "Nothing happens"],
      answer: 0,
      feedback: "Spending more than you earn leads to debt and stress."
    },
    {
      q: "What is an example of income?",
      options: ["Allowance or salary", "New shoes", "A gift card", "Groceries"],
      answer: 0,
      feedback: "Income is money you receive — like allowance or a job paycheck."
    },
    {
      q: "What should you do with your leftover allowance?",
      options: ["Save some of it", "Spend all of it", "Give it away", "Hide it at school"],
      answer: 0,
      feedback: "Saving part of your allowance helps you prepare for the future."
    },
    {
      q: "What is pocket money usually used for?",
      options: ["Small personal purchases", "Paying rent", "Bank transfers", "Car insurance"],
      answer: 0,
      feedback: "Pocket money is for small, everyday spending."
    },
    {
      q: "How can you keep track of your money?",
      options: ["Use a notebook or app", "Keep guessing", "Ask your friend", "Memorize it"],
      answer: 0,
      feedback: "Tracking your money in an app or notebook helps you see where it goes."
    },
    {
      q: "What is the best way to avoid impulse buying?",
      options: ["Think before you buy", "Always buy on sale", "Spend your allowance fast", "Follow your favorite influencer"],
      answer: 0,
      feedback: "Thinking before you buy helps you avoid wasteful spending."
    },
    {
      q: "Where should you keep money instead of your backpack?",
      options: ["In a savings account", "In your locker", "In your socks", "Under your mattress"],
      answer: 0,
      feedback: "A savings account keeps your money safer than carrying it around."
    },
    {
      q: "What is an allowance?",
      options: ["Money given regularly by parents", "A bill", "A tax", "A store coupon"],
      answer: 0,
      feedback: "Allowance is money given to you regularly by parents or guardians."
    },
    {
      q: "Which of these is a smart spending habit?",
      options: ["Buying only what you need", "Spending without a list", "Buying only name brands", "Ignoring your budget"],
      answer: 0,
      feedback: "Buying only what you need leaves money for savings and goals."
    },
    {
      q: "Why is saving better than spending everything?",
      options: ["It helps prepare for the future", "It’s boring", "You earn less", "You avoid making decisions"],
      answer: 0,
      feedback: "Saving means you’ll have money for emergencies and future needs."
    },
    {
      q: "If you receive 3,000₸ weekly and save 1,000₸, what do you spend?",
      options: ["2,000₸", "1,000₸", "4,000₸", "3,000₸"],
      answer: 0,
      feedback: "Saving 1,000₸ from 3,000₸ means you have 2,000₸ left to spend."
    },
    {
      q: "If you want to buy something expensive, what should you do?",
      options: ["Save up for it over time", "Borrow from everyone", "Use all your money at once", "Ask a stranger"],
      answer: 0,
      feedback: "Saving up is the smart way to buy expensive items without debt."
    },
    {
      q: "Which of these can help you learn about money?",
      options: ["Taking a financial literacy quiz", "Watching movies", "Ignoring prices", "Shopping every day"],
      answer: 0,
      feedback: "Quizzes and games make financial learning fun."
    }
  ],

  intermediate: [
    {
      q: "Which is a common reason teens borrow money?",
      options: ["To buy a phone or electronics", "To pay taxes", "To start a company", "To retire early"],
      answer: 0,
      feedback: "Teens often borrow for big-ticket items like phones."
    },
    {
      q: "What does a personal budget help with?",
      options: ["Managing spending and saving", "Earning more money", "Avoiding school", "Getting free stuff"],
      answer: 0,
      feedback: "A budget helps you balance your money and avoid overspending."
    },
    {
      q: "Which is a long-term financial goal?",
      options: ["Saving for university", "Buying snacks", "Going to a concert", "Paying for lunch"],
      answer: 0,
      feedback: "Saving for education is a long-term financial goal."
    },
    {
      q: "Why should you track your expenses?",
      options: ["To understand where your money goes", "To look cool", "To impress the bank", "To avoid saving"],
      answer: 0,
      feedback: "Tracking expenses shows exactly where your money is going."
    },
    {
      q: "What is a savings goal?",
      options: ["A plan for what you're saving for", "A job title", "A game reward", "An online deal"],
      answer: 0,
      feedback: "Savings goals give you motivation to put money aside."
    },
    {
      q: "What is an example of a fixed expense?",
      options: ["Monthly phone bill", "Snacks", "Birthday gift", "Concert ticket"],
      answer: 0,
      feedback: "Fixed expenses stay the same every month, like a phone bill."
    },
    {
      q: "What is a variable expense?",
      options: ["An expense that changes monthly", "Same rent every month", "Fixed loan", "Salary"],
      answer: 0,
      feedback: "Variable expenses change from month to month, like food."
    },
    {
      q: "What happens if you don’t manage your spending?",
      options: ["You may run out of money", "You earn more", "You get discounts", "You save automatically"],
      answer: 0,
      feedback: "Not managing spending can leave you broke before payday."
    },
    {
      q: "What’s a benefit of using a budget app?",
      options: ["It helps track spending", "It gives you cash", "It prevents savings", "It lowers prices"],
      answer: 0,
      feedback: "Budget apps show you where your money goes instantly."
    },
    {
      q: "Why is setting a savings goal helpful?",
      options: ["It keeps you motivated to save", "You stop spending", "You get paid more", "It adds interest automatically"],
      answer: 0,
      feedback: "Goals help you stay motivated to save."
    },
    {
      q: "What should you consider before taking a loan?",
      options: ["Whether you can repay it", "If your friends approve", "If the bank offers pizza", "If it’s trendy"],
      answer: 0,
      feedback: "Always think if you can repay before you borrow."
    },
    {
      q: "What is a bank account?",
      options: ["A safe place to store money", "A money-losing business", "A video game", "An Instagram account"],
      answer: 0,
      feedback: "Bank accounts protect your money."
    },
    {
      q: "What is cashback?",
      options: ["A small % of money returned after spending", "A tax", "A bank fee", "Extra cost"],
      answer: 0,
      feedback: "Cashback gives you a little money back when you spend."
    },
    {
      q: "What does ‘debt’ mean?",
      options: ["Money you owe someone", "A savings account", "Bonus money", "Profit"],
      answer: 0,
      feedback: "Debt is borrowed money you must pay back."
    },
    {
      q: "Why should you avoid impulse buying?",
      options: ["It leads to overspending", "It saves time", "It impresses others", "It makes budgeting easier"],
      answer: 0,
      feedback: "Impulse buying drains your savings and breaks your budget."
    }
  ],

  advanced: [
    {
      q: "What is a stock?",
      options: ["A share of ownership in a company", "A type of loan", "An interest rate", "A savings plan"],
      answer: 0,
      feedback: "Buying stock means you own part of that company."
    },
    {
      q: "What is a mutual fund?",
      options: ["A group of investments managed together", "A free account", "A personal savings goal", "A shopping list"],
      answer: 0,
      feedback: "Mutual funds pool money into many investments to lower risk."
    },
    {
      q: "Why is it risky to invest all money in one stock?",
      options: ["If it fails, you lose everything", "You earn faster", "Taxes increase", "It grows faster"],
      answer: 0,
      feedback: "If one stock crashes, you lose everything — diversify instead."
    },
    {
      q: "What does ROI stand for?",
      options: ["Return on Investment", "Rate of Insurance", "Revenue or Income", "Random Opportunity Index"],
      answer: 0,
      feedback: "ROI means how much you gain or lose on an investment."
    },
    {
      q: "What is the benefit of starting to invest early?",
      options: ["More time to grow your money", "Easier access to loans", "Less money to save", "Free bank services"],
      answer: 0,
      feedback: "Starting early gives your money years to grow."
    },
    {
      q: "What is a financial portfolio?",
      options: ["A collection of investments", "A resume", "A wallet", "A price list"],
      answer: 0,
      feedback: "Your portfolio is the mix of all your investments."
    },
    {
      q: "What is inflation?",
      options: ["General increase in prices", "Prices dropping", "Stable prices", "Currency swap"],
      answer: 0,
      feedback: "Inflation means prices rise and money buys less."
    },
    {
      q: "What does it mean to ‘invest’ money?",
      options: ["Put money into something to earn a return", "Hide it", "Give it away", "Pay a fine"],
      answer: 0,
      feedback: "Investing means using money now to (hopefully) earn more later."
    },
    {
      q: "What is a bond?",
      options: ["A loan to the government or company", "Stock", "Interest rate", "Cryptocurrency"],
      answer: 0,
      feedback: "Bonds are like lending money to a government or business."
    },
    {
      q: "What is risk tolerance?",
      options: ["How much loss you can handle", "Interest rate", "Investment type", "Spending ability"],
      answer: 0,
      feedback: "Risk tolerance is how much financial loss you can handle emotionally."
    },
    {
      q: "What is diversification in finance?",
      options: ["Spreading investments to lower risk", "Investing in only crypto", "Buying one company’s stock", "Spending it all"],
      answer: 0,
      feedback: "Diversification means not putting all your money in one investment."
    },
    {
      q: "What’s the difference between a debit and a credit card?",
      options: ["Debit uses your money, credit borrows from bank", "Both are same", "Credit is cheaper", "Debit pays interest"],
      answer: 0,
      feedback: "Debit uses your funds; credit borrows from the bank."
    },
    {
      q: "Why do people invest in mutual funds?",
      options: ["To reduce risk through variety", "To avoid taxes", "To shop online", "To buy gold"],
      answer: 0,
      feedback: "Mutual funds spread risk by investing in many things at once."
    },
    {
      q: "What is a financial goal?",
      options: ["Something you want to achieve with your money", "A gift card", "A product", "A discount"],
      answer: 0,
      feedback: "A financial goal is a plan for your money, like saving for a car."
    },
    {
      q: "What is net income?",
      options: ["Income after taxes and expenses", "Total income", "Cash savings", "Bonus"],
      answer: 0,
      feedback: "Net income is what you take home after taxes and bills."
    }
  ]
};