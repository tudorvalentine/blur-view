@objc(BlurViewViewManager)
class BlurViewViewManager: RCTViewManager {
    
    override func view() -> (BlurViewView) {
        return BlurViewView()
    }
    
    @objc override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}

class BlurViewView : UIView {
    
    private var currentMaxBlurRadius: CGFloat = 20
    private var currentDirection: VariableBlurDirection = .blurredTopClearBottom
    private var currentStartOffset: CGFloat = 0
    
    @objc var maxBlurRadius: NSNumber = 20 {
        didSet {
            currentMaxBlurRadius = CGFloat(truncating: maxBlurRadius)
            updateBlurView()
        }
    }
    
    @objc var direction: String = "blurredTopClearBottom" {
        didSet {
            currentDirection = direction == "blurredBottomClearTop" ? .blurredBottomClearTop : .blurredTopClearBottom
            updateBlurView()
        }
    }
    
    @objc var startOffset: NSNumber = 0 {
        didSet {
            currentStartOffset = CGFloat(truncating: startOffset)
            updateBlurView()
        }
    }
    
    private var blurView: VariableBlurUIView?
    
    private func updateBlurView() {
        // Remove old blur view if exists
        blurView?.removeFromSuperview()
        
        // Create new blur view with updated parameters
        let newBlurView = VariableBlurUIView(
            maxBlurRadius: currentMaxBlurRadius,
            direction: currentDirection,
            startOffset: currentStartOffset
        )
        
        addSubview(newBlurView)
        newBlurView.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            newBlurView.topAnchor.constraint(equalTo: topAnchor),
            newBlurView.bottomAnchor.constraint(equalTo: bottomAnchor),
            newBlurView.leadingAnchor.constraint(equalTo: leadingAnchor),
            newBlurView.trailingAnchor.constraint(equalTo: trailingAnchor)
        ])
        
        blurView = newBlurView
    }
    
    init() {
        super.init(frame: CGRect.zero)
        updateBlurView()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}
