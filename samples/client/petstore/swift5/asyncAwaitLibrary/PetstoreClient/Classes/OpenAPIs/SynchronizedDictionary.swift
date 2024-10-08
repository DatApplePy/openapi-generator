// SynchronizedDictionary.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

internal struct SynchronizedDictionary<K: Hashable, V> {

    private var dictionary = [K: V]()
    private let lock = NSRecursiveLock()

    internal subscript(key: K) -> V? {
        get {
            lock.lock()
            defer { lock.unlock() }
            return self.dictionary[key]
        }
        set {
            lock.lock()
            defer { lock.unlock() }
            self.dictionary[key] = newValue
        }
    }
}
