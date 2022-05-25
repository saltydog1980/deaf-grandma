def deaf_grandma():
    bye_count = 0
    prompt = input("HEY KID!")
    while bye_count != 2:
        if prompt == "":
            prompt = input("WHAT?!")
        elif prompt == "GOODBYE!":
            if bye_count == 0:
                prompt = input("LEAVING SO SOON?")
                bye_count += 1
            elif bye_count == 1:
                bye_count += 1
                print("LATER, SKATER!")
        elif prompt.isupper():
            prompt = input("NO, NOT SINCE 1946!")
        else:
            prompt = input("SPEAK UP, KID!")
deaf_grandma()
