package com.rocco.app;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Grab WebView
        WebView webView = (WebView) findViewById(com.getcapacitor.android.R.id.webview);
        WebSettings webSettings = webView.getSettings();

        // The Magic
        webSettings.setUseWideViewPort(true);
        webSettings.setLoadWithOverviewMode(true);
    }
}
