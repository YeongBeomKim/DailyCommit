//
//  ViewController.swift
//  Calculator_ex
//
//  Created by 김영범 on 2016. 10. 11..
//  Copyright © 2016년 김영범. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var display: UILabel!
    var userIsTheMiddleOfTyping = false
    @IBAction func touchDigit(_ sender: UIButton){
        let digit = sender.currentTitle!
        if userIsTheMiddleOfTyping {
            let textCurrentlyInDisplay = display.text!
            display.text = textCurrentlyInDisplay + digit
        } else{
            display.text = digit
        }
        userIsTheMiddleOfTyping = true
    }
}

