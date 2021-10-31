import urllib.request
import os

def retrieveObject(objName):
    root = "https://storage.googleapis.com/hacktx-imagestorage/"
    saveDir = "../src/assets/"
    fileName, fileType = os.path.splitext(objName)

    getFrom = root+objName
    saveAt = saveDir + fileName + "_DOWNLOAD" + fileType

    urllib.request.urlretrieve(getFrom, saveAt)

    return saveAt

retrieveObject("test.jpg")