package webviewexample.prob.ceids;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class Prueba_WebViewActivity extends Activity {
	
	private WebView wv_tetris;
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        //Obtener el WebView que maneja HTML, JavaScript, etc...
        
        this.wv_tetris = (WebView)findViewById(R.id.wb_tetris);
        
        //Habilitar el JavaScript(por defecto esta deshabili
        
        this.wv_tetris.getSettings().setJavaScriptEnabled(true);
        
        this.wv_tetris.loadUrl("file:///android_asset/Tetris/index.html");
        
    }
}