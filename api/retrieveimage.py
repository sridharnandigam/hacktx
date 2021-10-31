import urllib.request
import os

def retrieveObject(objName):
    root = "https://storage.googleapis.com/hacktx-imagestorage/"
    saveDir = "temp/"
    fileName, fileType = os.path.splitext(objName)

    getFrom = root+objName
    saveAt = saveDir + fileName + "_DOWNLOAD" + fileType

    urllib.request.urlretrieve(getFrom, saveAt)

retrieveObject("test.jpg")