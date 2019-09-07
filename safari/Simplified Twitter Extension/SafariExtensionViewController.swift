//
//  SafariExtensionViewController.swift
//  Simplified Twitter Extension
//
//  Created by Bruce Roettgers on 19.08.19.
//  Copyright © 2019 Dirk Hulverscheidt. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
