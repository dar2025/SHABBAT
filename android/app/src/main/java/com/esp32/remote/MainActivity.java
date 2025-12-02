package com.esp32.remote;

import android.os.Bundle;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // מאפשר פתיחת DevTools מהדפדפן במחשב
        WebView.setWebContentsDebuggingEnabled(true);
    }
}
