import os

for path, subdirs, files in os.walk("."):
    for name in files:
        if not "_en.md" in name:
            continue
        old_name = name
        new_name = name.replace("_en.md", "__en.md")
        print(os.path.join(path, old_name) + " -> " + os.path.join(path, new_name))
        os.rename(os.path.join(path, old_name), os.path.join(path, new_name))
        # if ".vue" in name:
        #   os.remove(os.path.join(path, name))
        # #print(os.path.join(path, name))
