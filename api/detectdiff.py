from skimage.metrics import structural_similarity
import argparse
import imutils
import cv2
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

def returnDifference():
    image_orig = cv2.imread("images/image1.jpg")
    image_mod = cv2.imread("images/image2.jpg")

    resized_orig = cv2.resize(image_orig, (300, 200))    
    resized_mod = cv2.resize(image_mod, (300, 200))

    plt.imshow(resized_orig)
    plt.imshow(resized_mod)

    gray_orig = cv2.cvtColor(resized_orig, cv2.COLOR_BGR2GRAY)
    gray_mod = cv2.cvtColor(resized_mod, cv2.COLOR_BGR2GRAY)

    (score, diff) = structural_similarity(gray_orig, gray_mod, full=True)
    diff = (diff * 255).astype("uint8")
    print("Structural Similarity Index: {}".format(score))

    thresh = cv2.threshold(diff, 0, 25, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]

    cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)

    for c in cnts:
        (x, y, w, h) = cv2.boundingRect(c)
        cv2.rectangle(resized_orig, (x, y), (x + w, y + h), (0, 0, 255), 2)
        cv2.rectangle(resized_mod, (x, y), (x + w, y + h), (0, 0, 255), 2)
    
    # show the output images
    plt.imshow(resized_orig)
    plt.imshow(resized_mod)

    return resized_orig, resized_mod