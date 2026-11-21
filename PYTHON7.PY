# expence    ====   ===   ====   tracker
expensess = []
while True:
    print("====== MAIN MENU =======")
    print("1 TO ADD EXPENSES")
    print("2 TO VIEW ALL EXPENCES")
    print("3 TO VIEW TOTAL SPENDINGS")
    print("4 TO EXIT")

    choice = int(input("can u plese enter ur choice:....   .- "))

    if choice == 1:
        print("ADD UR EXPENSES")
        date = input("ENTER UR DATE:  . ..  -  ")
        category = input("CAN U PLS ENTER UR CATEGORY OF EXPENSE (FOOD), (TRAVEL), (BOOKS), (DAILY NEEDS),,....-  ")
        descriptions = input("ADD UR DISCRIPTION OF EXPENSE..-  ")
        amount = float(input("ENTER THE AMOUNT OF UR EXPENSE.. KITNA KHARCHA KAR DIYA ..:  "))
        expenses = {
            "date" : date,
            "category" : category,
            "descriptions" : descriptions,
            "amount" : amount
        }
        expensess.append(expenses)
        print("UR EXPESES ADDED SUCCESS FULLY")

    elif choice == 2:
        if(len(expensess) == 0):
            print("U HAVE NOT ADDED UR EXPENSESE OR U HAVE NOT SPENDEDE ANYTHING")
        else:
            print("THIS IS UR EXPENSES")
            count = 1
            for choicess in expensess:
                print(f"entry {count} , =====_====, date: {choicess["date"]}, category: {choicess["category"]}, Descriptions: {choicess["descriptions"]}, Amount: {choicess["amount"]}")
                count = count + 1

    elif choice == 3:
        total_spendings = 0
        for choicesss in expensess:
            int(choicesss["amount"])
            total_spendings = total_spendings + choicess["amount"]
            print(" /n total spendings:" , total_spendings)

    elif choice == 4:
        print("byee byee nice to meet u use us again we are thankfull that u use uses")
        break

    else:
        print("invalid")

    