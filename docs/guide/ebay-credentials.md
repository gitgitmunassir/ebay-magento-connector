# How to get eBay Connector credentials?

After the successful installation of Magento 2 ebay integration module, one will need to fill in the eBay developer keys **(app id, cert id, dev id, user id, auth token**).

Thus, the eBay account has these credentials.

However, if the user doesn’t have an account, then the user will have to create an account and get the required keys.

#### **First Step**

To create a new account go to [**developer.ebay.com**](https://developer.ebay.com) and click on the **sign-in/Join link**.

[!\[Sign-Up\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-Up.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-Up.png)

#### **Second Step**

Now, create a **username** and **password** for your account and then click the **join** button.  
[!\[Register- eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Register.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Register.png)

#### Third Step

After the above step, you need to create an app. Enter the **app name** and choose the **environment** to generate your **key set**.

So, keep a note that when you generate the keys set then only the app saves.

[!\[eBay Connector for Magento 2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-name.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-name.pnge)

#### **Fourth Step**

So, after clicking on the **Create a Keyset** link(for the environment you choose), you need to confirm the primary contact for this account first.

Henceforth you can click the **Continue to Create Keys** button.  
[!\[confirm-primary-Account eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/confirm-primary-Account-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/confirm-primary-Account-1.png)

#### Fifth Step

Now you can see the environment key that you select. Thus, for creating the production keys just click on the “**Create a Key Set**” and you will get your production keys.  
[!\[Sandbox-keys-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys.png)

#### **Sixth Step**

Thus, for generating the **User Token** go to your **Application keys page**. Hence, in the **App ID** row of the Sandbox keyset, click the **User Tokens** to access the Tokens page for your Sandbox keyset.  
[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys-1.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sandbox-keys-1.png)

#### Seventh ** Step**

After you click on **“User Tokens”** in the snapshot above, you will see a “**Sign in to Sandbox**” button. Hence, click it to access the sandbox account.  
[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-In-Sandbox.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Sign-In-Sandbox.png)

So, from here, the user can even get an ‘**eBay Oauth Key**‘ which they can add to **Default Business Policy**.

![User-Tokens-eBay-Sign-In-eBay-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/User-Tokens-eBay-Sign-In-eBay-1-1.png)

Here, the ‘*sjohn_smith-johnsmit-john-laitazrqx*‘ is the RuName of the application that will be part of the admin configuration.

Additionally, the Your privacy policy URL, auth accepted URL and auth declined URL- will have the frontend URL of the website.

**Your auth accepted URL:** This field is the most important. It should be set as shown below-

https://**domainname**/ebaymagentoconnect/index/fetchtoken

#### **Eighth** Step

Now, enter your Sandbox **Username** and **Password**.  
[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/login-sandbox.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/login-sandbox.png)

#### Ninth Step

Hence, after clicking the “**Sign in**” button, you will see another page where you have to click the “**Agree**” button.

[!\[image\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Agree.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/Agree.png)

#### Tenth Step

Lastly, you will redirect back and will get the **App Token**.  
[!\[App-Token-eBay Connector for Magento2\](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-Token.png)](https://cdnblog.webkul.com/blog/wp-content/uploads/2014/02/App-Token.png)
